// Import necessary types and components from supertokens-auth-react
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";
import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import { useNavigate } from "@remix-run/react";

// Object to store router information
const routerInfo: {
  navigate?: ReturnType<typeof useNavigate>;
  pathName?: string;
} = {};

// Function to set router information
export function setRouter(
  navigate: ReturnType<typeof useNavigate>,
  pathName: string
) {
  routerInfo.navigate = navigate;
  routerInfo.pathName = pathName;
}

// Function to configure Supertokens for the frontend
export const frontendConfig = (): SuperTokensConfig => {
  return {
    // App information
    appInfo,
    // List of Supertokens recipes to initialize
    recipeList: [
      // ThirdPartyEmailPassword recipe with providers (Google, Facebook, Github, Apple)
      ThirdPartyEmailPasswordReact.init({
        signInAndUpFeature: {
          providers: [
            ThirdPartyEmailPasswordReact.Google.init(),
            ThirdPartyEmailPasswordReact.Facebook.init(),
            ThirdPartyEmailPasswordReact.Github.init(),
            ThirdPartyEmailPasswordReact.Apple.init(),
          ],
        },
      }),
      // Session recipe initialization
      SessionReact.init(),
    ],
    // Custom window handler to modify the behavior of the Supertokens window object
    windowHandler: (original) => ({
      ...original,
      location: {
        ...original.location,
        // Override getPathName, assign, and setHref methods to use window.location directly
        getPathName: () => window.location.pathname,
        assign: (url) => window.location.assign(url.toString()),
        setHref: (url) => window.location.assign(url.toString()),
      },
    }),
  };
};

// List of pre-built UI components for ThirdPartyEmailPassword
export const PreBuiltUIList = [ThirdPartyEmailPasswordPreBuiltUI];
