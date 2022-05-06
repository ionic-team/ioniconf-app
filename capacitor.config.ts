import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.ioniconf',
  appName: 'ioniconf',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      DisableDeploy: 'true',
    },
  },
};

export default config;
