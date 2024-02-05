import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import { SuperTokensProvider } from "./components/supertokensProvider";

export default function App() {
  return (
    <html lang="en">
      {/* Wrap the application with the SuperTokensProvider for authentication */}
      <SuperTokensProvider>
        <head>
          <link rel="icon" href="data:image/x-icon;base64,AA" />
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Hello world!</h1>
          {/* Outlet component to render the nested route content */}
          <Outlet />

          {/* Scripts component to include JavaScript files */}
          <Scripts />
          {/* LiveReload component for automatic page reload during development */}
          <LiveReload />
        </body>
      </SuperTokensProvider>
    </html>
  );
}
