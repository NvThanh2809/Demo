import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    { name: " Apple", price: 5, emoji: "🍎" },
    { name: "Mamgo", price: 10, emoji: "🥭" },
    { name: "Banana", price: 7, emoji: "🍌" },
    { name: "Orange", price: 8, emoji: "🍊" },
    { name: "Pineapple", price: 9, emoji: "🥕" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
// {fruits.map((fruit) => (<h1>{fruit} </h1>))} : duyệt các phần tử trong mảng
// <ul>{fruits.map((fruit) => (<li key={fruit}>{fruit}</li>))}</ul> : Duyệt theo các chấm trong mảng
// <ol> duyệt đánh số
