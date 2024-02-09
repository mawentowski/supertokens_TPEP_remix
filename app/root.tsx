import React, { useEffect } from "react";
import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
// import { ensureSuperTokensInit } from "./config/backend";
import { frontendConfig } from "./config/frontend";

// ensureSuperTokensInit();

if (typeof window !== "undefined") {
  console.log("the type of window is:", typeof window);
  console.log("initializing frontendconfig now");
  SuperTokens.init(frontendConfig());
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SuperTokensWrapper>
          <Outlet /> {/* This is where child routes will be rendered */}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </SuperTokensWrapper>
      </body>
    </html>
  );
}
