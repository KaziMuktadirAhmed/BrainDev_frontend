import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>

      <ul className="underline link-decoration">
        <li>
          <Link to="/auth" className="hover:text-blue-500">
            Auth page
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-red-500">
            Dashboard page
          </Link>
        </li>
      </ul>
    </>
  );
}
