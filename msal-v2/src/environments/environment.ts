import { BrowserCacheLocation } from '@azure/msal-browser';

export const environment = {
  production: false,
  consentScopes: {
    application: 'api://dafe5c0d-639b-46e5-92a6-96ed2d7e00b2/.default',
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
