export default function Fruit({ name, price, emoji }) {
  return (
    <li>
      {name} &{price} {emoji}
    </li>
  );
}
// Fruit giống như 1 đối tượng riêng gồm các thuộc tính mà ko cần duyệt qua từng mảng
