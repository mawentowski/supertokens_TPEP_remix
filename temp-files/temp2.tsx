import { getAppDirRequestHandler } from "supertokens-node/nextjs";
import {
  Request as RemixRequest,
  Response as RemixResponse,
  json,
} from "@remix-run/node";
import { ensureSuperTokensInit } from "../../../config/backend";
import { IncomingMessage } from "http";

// Ensure that SuperTokens is initialized before handling requests
ensureSuperTokensInit();

// Define a custom type that extends RemixRequest and adds required properties
interface ExtendedRemixRequest extends IncomingMessage {
  method: string;
  url: string;
  headers: Record<string, string | string[]>;
  formData: () => Promise<FormData>;
  json: () => Promise<unknown>;
  cookies: Record<string, string>;
}

// Handler for GET requests
export async function loader(request: ExtendedRemixRequest) {
  // Handle GET requests here
  // For now, let's return a dummy response
  console.log("Request received:", request);
  return json({ message: "GET request handled" });
}

// Handler for POST requests
export async function action(request: ExtendedRemixRequest) {
  // Handle POST requests here
  console.log("Request received:", request);
  // For example, you can refresh the session
  return json({ message: "Session refreshed" });
}
