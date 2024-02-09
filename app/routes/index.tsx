import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

export default function Home() {
  async function onLogout() {
    await signOut();
    window.location.href = "/";
  }

  return (
    <SessionAuth>
      <div>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
    </SessionAuth>
  );
}
