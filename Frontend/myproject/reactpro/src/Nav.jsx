import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          <Link to="/products"> Products</Link>
        </li>
      </ol>
    </div>
  );
}
