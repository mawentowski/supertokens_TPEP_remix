import { getAppDirRequestHandler } from "supertokens-node/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { ensureSuperTokensInit } from "./app/config/backend";

// Ensure that SuperTokens is initialized before handling requests
ensureSuperTokensInit();

// Get the request handler for the application directory
const handleCall = getAppDirRequestHandler(NextResponse);

// Handler for GET requests
export async function GET(request: NextRequest) {
  // Handle the request using the request handler
  const res = await handleCall(request);
  // Add Cache-Control header to prevent caching in production deployments
  if (!res.headers.has("Cache-Control")) {
    res.headers.set(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );
  }
  return res;
}

// Handler for POST requests
export async function POST(request: NextRequest) {
  return handleCall(request);
}

// Handler for DELETE requests
export async function DELETE(request: NextRequest) {
  return handleCall(request);
}

// Handler for PUT requests
export async function PUT(request: NextRequest) {
  return handleCall(request);
}

// Handler for PATCH requests
export async function PATCH(request: NextRequest) {
  return handleCall(request);
}

// Handler for HEAD requests
export async function HEAD(request: NextRequest) {
  return handleCall(request);
}
