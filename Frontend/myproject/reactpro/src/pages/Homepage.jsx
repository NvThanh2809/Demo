import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  function handleClick() {
    navigate("/dashboard/profile", { state: { name } });
  }
  return (
    <div>
      Homepage
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <button onClick={handleClick}> Go to Profile</button>
    </div>
  );
}
// Cách tạo react router
// npm install react-router-dom@6
