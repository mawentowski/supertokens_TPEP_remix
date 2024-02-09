import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express/index.js";
import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import * as build from "./build/index.js";

const app = express();

// CORS setup
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

// Supertokens middleware
app.use(middleware());

// Serve static assets from the public directory
app.use(express.static("public"));

// Remix request handler
app.all("*", createRequestHandler({ build }));

// Start the server
app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});
