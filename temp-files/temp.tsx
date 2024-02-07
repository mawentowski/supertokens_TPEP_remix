// import { getAppDirRequestHandler } from "supertokens-node/nextjs";
import { json } from "@remix-run/node";
import { ensureSuperTokensInit } from "../../../config/backend";
import { IncomingMessage } from "http";

// Define a custom type that matches the structure of IncomingHttpHeaders
type CustomHeaders = Headers & Record<string, string | string[]>;

// Define a custom interface that extends IncomingMessage and adds the required properties
interface ExtendedIncomingMessage extends IncomingMessage {
  method: string;
  url: string;
  headers: CustomHeaders; // Use CustomHeaders instead of Headers
  formData: () => Promise<FormData>;
  json: () => Promise<unknown>;
  cookies: {
    getAll: () => { name: string; value: string }[];
  };
}

// Ensure that SuperTokens is initialized before handling requests
ensureSuperTokensInit();

// Get the request handler for the application directory
// const handleCall = getAppDirRequestHandler(RemixResponse);

// Handler for GET requests
export async function loader(request: ExtendedIncomingMessage) {
  // Log the received request
  console.log("Request received:", request);

  // Handle the request using the request handler
  // const res = await handleCall(request);

  // Add Cache-Control header to prevent caching in production deployments
  // if (!res.headers.has("Cache-Control")) {
  //   res.headers.set(
  //     "Cache-Control",
  //     "no-cache, no-store, max-age=0, must-revalidate"
  //   );
  // }

  // return res;
  return request;
}

// Define an action to handle the POST request to "/api/auth/session/refresh"
export async function action(request: ExtendedIncomingMessage) {
  // Handle the POST request here
  // For example, you can refresh the session
  return json({ message: "Session refreshed" });
}

// Export loader and action
export { loader as postLoader };
export { loader as deleteLoader };
export { loader as putLoader };
export { loader as patchLoader };
export { loader as headLoader };
// export { action };
