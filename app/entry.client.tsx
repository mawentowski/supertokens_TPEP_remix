// This file is responsible for bootstrapping your Remix application on the client-side. It typically imports the necessary dependencies and initializes the client-side rendering environment. In this file, you might initialize client-side libraries, set up event listeners, or perform any other client-specific initialization tasks. It's the starting point for client-side code execution.

import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import SuperTokens from "supertokens-auth-react";
import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";

const frontendConfig = (): SuperTokensConfig => {
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

if (typeof window !== "undefined") {
  SuperTokens.init(frontendConfig());
}

hydrate(<RemixBrowser />, document);
