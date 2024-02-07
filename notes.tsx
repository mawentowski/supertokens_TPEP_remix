import { LoaderFunctionArgs } from "react-router-dom";
import { ensureSuperTokensInit } from "../../../config/backend";
import { getAppDirRequestHandler } from "~/lib/app-dir-request-handler";
import { Response } from "@remix-run/node";

// Ensure that SuperTokens is initialized before handling requests
ensureSuperTokensInit();

// Get the request handler for the application directory
const handleCall = getAppDirRequestHandler(Response);

// Define the action handler function for handling requests
export async function loader({ request }: LoaderFunctionArgs) {
  // Define the function to create the PartialRemixRequest object
  // Ensure that SuperTokens is initialized before handling requests
  console.log("Recieved request, the request looks like:", request);

  function createPartialRemixRequest(request: Request) {
    ensureSuperTokensInit();
    return {
      method: request.method, // Assuming request.method is a string
      url: request.url, // Assuming request.url is a string
      headers: request.headers, // Assuming request.headers is a Headers object
      formData: () => request.formData(), // Assuming request.formData() returns a Promise<FormData>
      json: () => request.json(), // Assuming request.json() returns a Promise<unknown>
      cookies: {
        getAll: () => {
          // Assuming cookies are accessible from request.headers or a similar property
          const cookieHeader = request.headers.get("Cookie");
          if (cookieHeader) {
            // Parse cookie header and return an array of cookie objects
            return cookieHeader.split(";").map((cookieString) => {
              const [name, value] = cookieString.trim().split("=");
              return { name, value };
            });
          } else {
            return [];
          }
        },
      },
    };
  }

  // Generic request handling logic
  const req = createPartialRemixRequest(request);

  // Call handleCall with the constructed request object
  const res = await handleCall(req);

  // Add Cache-Control header for GET requests
  if (request.method === "GET" && !res.headers.has("Cache-Control")) {
    res.headers.set(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );
  }

  return res;
}
