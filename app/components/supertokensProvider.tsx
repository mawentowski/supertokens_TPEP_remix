import React, { ReactNode, useEffect } from "react";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import { frontendConfig, setRouter } from "../config/frontend";
import { useNavigate } from "@remix-run/react";

// Check if the code is running on the client-side (browser)
if (typeof window !== "undefined") {
  // Initialize Supertokens with the frontend configuration
  SuperTokensReact.init(frontendConfig());
}

// Define the properties for the SuperTokensProvider component
interface SuperTokensProviderProps {
  children: ReactNode;
}

// SuperTokensProvider component to wrap the application and provide authentication functionality
export const SuperTokensProvider: React.FC<SuperTokensProviderProps> = ({
  children,
}) => {
  // Use the useNavigate hook from Remix for navigation
  const navigate = useNavigate();

  // useEffect to set up the router information when the component mounts
  useEffect(() => {
    // Call the setRouter function to store navigate and pathname information
    setRouter(navigate, window.location.pathname);
  }, [navigate]);

  // Render SuperTokensWrapper to wrap the application with authentication functionality
  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};
