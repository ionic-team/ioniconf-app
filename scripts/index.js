const writeFile = require("fs").writeFileSync;

require("dotenv").config();
const hsApiKey = process.env.HS_API_KEY;
const isProd = process.env.ENVIRONMENT === "production" ? true : false;

const envConfigFile = `
  export const environment = {
    production: ${isProd},
    prismic: {
      domain: 'ionicframeworkcom',
      ref: 'Ylm-tBIAACsAdo2J',
    },
    hubspot: {
      apiKey: '${hsApiKey}',
      portalID: '3776657',
      formID: '1eb592c9-24ef-4809-9dca-baa88910b110',
    },
  };
`;
writeFile("src/environments/environment.ts", envConfigFile);

const disableLiveUpdates = `cordova: {
      preferences: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        DisableDeploy: 'true',
      },
    }`;

const capConfigFile = `
  import { CapacitorConfig } from '@capacitor/cli';

  const config: CapacitorConfig = {
    appId: 'io.ionic.ioniconf',
    appName: 'ioniconf',
    webDir: 'www',
    bundledWebRuntime: false,
    ${!isProd ? `${disableLiveUpdates}` : ""}
  };

  export default config;
`;

writeFile("capacitor.config.ts", capConfigFile);
