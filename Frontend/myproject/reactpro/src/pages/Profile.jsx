import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { name } = location.state || {};
  return <div> profile for {name}</div>;
}
