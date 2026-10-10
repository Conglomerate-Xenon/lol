const KEY="dead_ahead_debug_currencies_v1";
const state = JSON.parse(localStorage.getItem(KEY) || "null") ||
  Object.fromEntries(CURRENCIES.map(c => [c.id, c.value]));

const currenciesEl=document.querySelector("#currencies");
const logEl=document.querySelector("#log");

function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function render(){
  currenciesEl.innerHTML="";
  CURRENCIES.forEach(c=>{
    const el=document.createElement("div");
    el.className="card";
    el.innerHTML=`<div class="name">${c.name}</div><div class="value">${state[c.id].toLocaleString("ru-RU")}</div>`;
    currenciesEl.appendChild(el);
  });
}
function log(message){
  const line=`[${new Date().toLocaleTimeString()}] ${message}`;
  logEl.textContent=line+"\n"+logEl.textContent;
}
document.querySelector("#addAll").onclick=()=>{
  CURRENCIES.forEach(c=>state[c.id]=(state[c.id]||0)+1000);
  save(); render(); log("Добавлено +1000 ко всем тестовым валютам.");
};
document.querySelector("#reset").onclick=()=>{
  CURRENCIES.forEach(c=>state[c.id]=c.value);
  save(); render(); log("Тестовые значения сброшены.");
};
document.querySelector("#launch").onclick=()=>{
  // Android WebView не имеет права произвольно запускать другое приложение.
  // В нативной обертке сюда можно добавить явный Intent с package name.
  log("Кнопка запуска подготовлена; нативный launcher требует Android-обертку.");
};
render();
log("Debug panel запущена.");
