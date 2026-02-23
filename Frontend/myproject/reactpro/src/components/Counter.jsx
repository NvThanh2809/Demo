import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function increment() {
    setCount(count + count1);
  }
  function decrement() {
    setCount(count - count1);
  }
  function tăng() {
    setCount1(count1 + 1);
  }
  function giảm() {
    setCount1(count1 - 1);
  }
  return (
    <div>
      <h1> Giá trị của số là: {count} </h1>
      <button onClick={increment}> Tăng số </button>
      <button onClick={decrement}> Giảm số </button>
      <h1> Giá trị lượng thay đổi là: {count1}</h1>
      <button onClick={tăng}> Tăng số</button>
      <button onClick={giảm}> Giảm số</button>
    </div>
  );
}
// const [count, setCount] = useState(0);
// cout: tên biến trạng thái, setCount: hàm thay đổi cout, useState(0): khởi tạo count = 0
// Trong component có thể cài đặt bao nhiêu state tùy ý
