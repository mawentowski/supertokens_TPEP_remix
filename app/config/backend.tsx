import ThirdPartyEmailPasswordNode from "supertokens-node/recipe/thirdpartyemailpassword";
import SessionNode from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import type { TypeInput } from "supertokens-node/types";
import SuperTokens from "supertokens-node";

export const backendConfig = (): TypeInput => {
  console.log("INITILIAZING SUPERTOKENS!");
  return {
    supertokens: {
      // this is the location of the SuperTokens core.
      connectionURI: "http://localhost:3567",
    },
    appInfo: {
      // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
      appName: "my-remix-app",
      apiDomain: "http://localhost:3000",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/api/auth",
      websiteBasePath: "/auth",
    },

    recipeList: [
      ThirdPartyEmailPasswordNode.init({
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientId:
                    "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                  clientSecret: "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",
                },
              ],
            },
          },
          {
            config: {
              thirdPartyId: "github",
              clients: [
                {
                  clientId: "af29b1f7e3b61dde66fc",
                  clientSecret: "616563e386772674e34a8b10b226403d11a30752",
                },
              ],
            },
          },
          {
            config: {
              thirdPartyId: "apple",
              clients: [
                {
                  clientId: "4398792-io.supertokens.example.service",
                  additionalConfig: {
                    keyId: "7M48Y4RYDL",
                    privateKey:
                      "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                    teamId: "YWQCXGJRJL",
                  },
                },
              ],
            },
          },
          {
            config: {
              thirdPartyId: "twitter",
              clients: [
                {
                  clientId: "4398792-WXpqVXRiazdRMGNJdEZIa3RVQXc6MTpjaQ",
                  clientSecret:
                    "BivMbtwmcygbRLNQ0zk45yxvW246tnYnTFFq-LH39NwZMxFpdC",
                },
              ],
            },
          },
        ],
      }),
      SessionNode.init(),
      Dashboard.init(),
      UserRoles.init(),
    ],
    isInServerlessEnv: true,
    framework: "custom",
  };
};

let initialized = false;
export function ensureSuperTokensInit() {
  console.log("check");
  if (!initialized) {
    console.log("supertokens is not initailized, initailizing now");
    SuperTokens.init(backendConfig());
    initialized = true;
  }
  console.log("supertokens is initialized - skip");
}
