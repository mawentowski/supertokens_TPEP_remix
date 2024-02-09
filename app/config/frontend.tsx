// This file is responsible for bootstrapping your Remix application on the client-side. It typically imports the necessary dependencies and initializes the client-side rendering environment. In this file, you might initialize client-side libraries, set up event listeners, or perform any other client-specific initialization tasks. It's the starting point for client-side code execution.

import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordReact.init({
        signInAndUpFeature: {
          providers: [
            ThirdPartyEmailPasswordReact.Google.init(),
            ThirdPartyEmailPasswordReact.Github.init(),
            ThirdPartyEmailPasswordReact.Apple.init(),
          ],
        },
      }),
      Session.init(),
    ],
  };
};
