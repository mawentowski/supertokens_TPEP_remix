// heres the docs: https://supertokens.com/docs/thirdpartyemailpassword/nextjs/app-directory/setting-up-backend#1-create-the-appapiauthpathroutets-route

import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const refreshedData = { message: "The catch-all API auth route works!" };
  return json(refreshedData);
};
