import { LoaderFunctionArgs } from "react-router-dom";
// import { loader } from "../utils/loader"; // Import your loader function

export async function loader({ request }: LoaderFunctionArgs) {
  // read a cookie
  const cookie = request.headers.get("Cookie");
  return {
    cookieValue: cookie, // You can return any data you want to use in your route component
  };
}
