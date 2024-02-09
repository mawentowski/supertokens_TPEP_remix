import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { ensureSuperTokensInit } from "../../../config/backend";
import { getAppDirRequestHandler } from "supertokens-node/nextjs";
import { Response } from "@remix-run/node";

ensureSuperTokensInit();




// Create an instance of the Response class
const remixResponse = new Response('OK', { status: 200 });

// Pass the instance of Response to getAppDirRequestHandler
const handleCall = getAppDirRequestHandler(remixResponse);


export async function loader = async ({ request, params }: LoaderFunctionArgs) => {
  if (request.method === "POST") {
    // Handle POST request
    const requestBody = await request.json(); // Assuming you're sending JSON data
    // Process the request body as needed
    const responseData = {
      message: "Received a POST request",
      requestData: requestBody,
    };
    console.log(responseData);
    return json(responseData);
  } else {
    // Handle other HTTP methods (e.g., GET)
    const refreshedData = { message: "The catch-all API auth route works!" };
    console.log(refreshedData);
    return json(refreshedData);
  }
};

// Action function for handling POST requests to the /api/auth/session/refresh route
export const action = async ({ request }: LoaderFunctionArgs) => {
  // Handle the POST request here
  // For example, you can refresh the session
  return json({ message: "Session refreshed" });
};
