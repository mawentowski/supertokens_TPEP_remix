import { SessionAuth } from "supertokens-auth-react/recipe/session";

export default function Home() {
  return (
    <SessionAuth>
      <div>
        <h1>Welcome to the Home Page!</h1>
      </div>
    </SessionAuth>
  );
}
