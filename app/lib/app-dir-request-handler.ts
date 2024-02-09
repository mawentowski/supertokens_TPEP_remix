// In summary, getAppDirRequestHandler sets up a middleware function to process incoming requests, prepares a base response object, handles request processing, and constructs the final response using Next.js's NextResponse class. This function encapsulates the logic for handling requests specific to the application directory in a Next.js application.

import { ensureSuperTokensInit } from "../config/backend.js";

// Ensure that SuperTokens is initialized before handling requests

import { Response } from "@remix-run/node";
import {
  CollectingResponse,
  PreParsedRequest,
  middleware,
} from "../../../supertokens-node/framework/custom/index.js";
import { serialize } from "cookie";
// Define the type for the request object expected by the middleware
import { HTTPMethod } from "supertokens-node/types/index.js";
type PartialRemixRequest = {
  method: string;
  url: string;
  headers: Headers;
  formData: () => Promise<FormData>;
  json: () => Promise<unknown>;
  cookies: {
    getAll: () => { name: string; value: string }[];
  };
};

// Define the function to handle requests and create responses
export function getAppDirRequestHandler<T extends PartialRemixRequest>(
  RemixResponse: typeof Response
) {
  ensureSuperTokensInit();

  // Create middleware to handle requests
  const stMiddleware = middleware<T>((req) => {
    // Extract relevant information from the request object
    const query = Object.fromEntries(new URL(req.url).searchParams.entries());
    const cookies: Record<string, string> = Object.fromEntries(
      req.cookies.getAll().map((cookie) => [cookie.name, cookie.value])
    );

    // Create a pre-parsed request object
    return new PreParsedRequest({
      method: req.method as HTTPMethod,
      url: req.url,
      query: query,
      headers: req.headers,
      cookies,
      getFormBody: async () => await req.formData(),
      getJSONBody: async () => await req.json(),
    });
  });

  // Define the function to handle calls to the middleware
  return async function handleCall(req: T) {
    // Initialize a collecting response object
    const baseResponse = new CollectingResponse();

    // Call the middleware to handle the request
    const { handled, error } = await stMiddleware(req, baseResponse);

    // If an error occurred, throw it
    if (error) {
      throw error;
    }

    // If the request was not handled, return a 404 response
    if (!handled) {
      return new RemixResponse("Not found", { status: 404 });
    }

    // Add cookies to the response headers
    for (const respCookie of baseResponse.cookies) {
      baseResponse.headers.append(
        "Set-Cookie",
        serialize(respCookie.key, respCookie.value, {
          domain: respCookie.domain,
          expires: new Date(respCookie.expires),
          httpOnly: respCookie.httpOnly,
          path: respCookie.path,
          sameSite: respCookie.sameSite,
          secure: respCookie.secure,
        })
      );
    }

    // Return the final response using the RemixResponse constructor
    return new RemixResponse(baseResponse.body, {
      headers: baseResponse.headers,
      status: baseResponse.statusCode,
    });
  };
}
