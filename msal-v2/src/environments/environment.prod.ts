import { BrowserCacheLocation } from '@azure/msal-browser';

export const environment = {
  production: true,
  consentScopes: {
    application: '',
  },
  unprotectedResources: [],
  protectedResourceMap: [
    // [
    //   '#{API_BASE_URL}',
    //   ['#{API_SCOPE}'],
    // ],
  ],
  azure: {
    ad: {
      auth: {
        authority: '#{Authority}',
        clientId: '#{Client_Id}',
        validateAuthority: true,
        redirectUri: window.location.origin,
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: false,
      },
      system: {
        loadFrameTimeout: 60000,
      },
    },
  },
};
