import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.densonhaimbangu.mindsetarchive',
  appName: 'Mindset Archive Studio',
  webDir: 'dist',
  server: {
    url: 'https://mindset-archive-studio.base44.app',
    cleartext: true
  }
};

export default config;
