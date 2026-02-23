import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Reducer from "./components/Reducer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./Nav";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Products from "./pages/Products";
import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
export const userContext = createContext();
function App() {
  // const seatNumbers = [1, 2, 3];
  // const person = { name: "David", message: "Hello...", seatNumbers: [1, 2, 3] };
  // return (
  //   <div className="App">
  //     <Hello person={person} />
  //     <Fruits />
  //     <Message />
  //     <Counter />
  //     <Form />
  //     <Reducer />
  //   </div>
  // );

  const [user, setUser] = useState("guest");
  return (
    // <BrowserRouter>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/products/:id" element={<Products />} />
    //     <Route path="/dashboard" element={<Dashboard />}>
    //       {" "}
    //       <Route path="profile" element={<Profile />} />
    //       <Route path="setting" element={<Setting />} />
    //     </Route>
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <userContext.Provider value={{ user }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;

// name, message l� c�c thu?c t�nh c?a props c� th? truy c?p
// const arr = [1, 2, 3] - khai b�o m?ng
// const person = { name: "Th�nh", message: "Hello..." } - khai b�o object (??i t??ng)
