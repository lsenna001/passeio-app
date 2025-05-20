import {AuthConfig} from 'angular-oauth2-oidc';


export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '516970945476-1ltkstmct769l4h98jbhhftcdj6pkq6d.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
