
  import { CapacitorConfig } from '@capacitor/cli';

  const config: CapacitorConfig = {
    appId: 'io.ionic.ioniconf',
    appName: 'ioniconf',
    webDir: 'www',
    bundledWebRuntime: false,
    backgroundColor: '#000000',
    plugins: {
      SplashScreen: {
        launchShowDuration: 3000,
        launchAutoHide: false,
        backgroundColor: '#000000',
        androidSplashResourceName: 'splash',
        androidScaleType: 'CENTER_CROP',
        showSpinner: false,
        splashFullScreen: false,
        splashImmersive: false,
      },
    },
    
  };

  export default config;
