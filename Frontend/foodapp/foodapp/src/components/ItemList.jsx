import Item from "./Item";
export default function ({ food, load }) {
  return (
    <div>
      {load ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
