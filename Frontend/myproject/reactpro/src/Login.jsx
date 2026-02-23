import { useState } from "react";
export default function Login() {
  const [value, setValue] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
