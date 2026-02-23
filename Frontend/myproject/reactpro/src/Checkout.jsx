import { useContext } from "react";
import { userContext } from "./App";
export default function Checkout() {
  const value = useContext(userContext);
  return <div> Checkout as {value.user}</div>;
}
