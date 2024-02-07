// This file is responsible for bootstrapping your Remix application on the client-side. It typically imports the necessary dependencies and initializes the client-side rendering environment. In this file, you might initialize client-side libraries, set up event listeners, or perform any other client-specific initialization tasks. It's the starting point for client-side code execution.

import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
// import SuperTokens from "supertokens-auth-react";
// import { frontendConfig } from "./config/frontend";

// if (typeof window !== "undefined") {
//   console.log("the type of window is:", typeof window);
//   console.log("initializing frontendconfig now");
//   SuperTokens.init(frontendConfig());
// }

hydrate(<RemixBrowser />, document);
