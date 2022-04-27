export interface PrismicConfiguration {
  apiEndpoint: string;
  accessToken?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://ionicframeworkcom.prismic.io/api/v2',
  linkResolver(doc) {
    return '/';
  },
};
