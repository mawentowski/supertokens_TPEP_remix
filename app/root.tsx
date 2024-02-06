import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";
import { SuperTokensWrapper } from "supertokens-auth-react";

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
