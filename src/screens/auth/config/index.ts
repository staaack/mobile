import Config from 'react-native-config';

import { ConfigureParams } from '@react-native-community/google-signin';

export const googleAuthConfig: ConfigureParams = {
  webClientId:
    '7109408676-3h5fq0a25on84g4h7flfd2sf0cguojru.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //hostedDomain: Config.HOSTED_DOMAIN, // specifies a hosted domain restriction
  //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  // accountName: '', // [Android] specifies an account name on the device that should be used
};
