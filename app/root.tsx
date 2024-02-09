import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { frontendConfig } from "./config/frontend";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined") {
  SuperTokens.init(frontendConfig());
}

export default function App() {
  const location = useLocation();
  const isUnprotectedRoute =
    location.pathname.startsWith("/api") ||
    location.pathname.startsWith("/auth");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SuperTokensWrapper>
          {isUnprotectedRoute ? (
            <Outlet />
          ) : (
            <SessionAuth>
              <Outlet />
            </SessionAuth>
          )}

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </SuperTokensWrapper>
      </body>
    </html>
  );
}
