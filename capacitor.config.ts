import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.xenon.deadaheaddebug',
  appName: 'Dead Ahead Debug',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#0b0d12'
  }
};

export default config;
