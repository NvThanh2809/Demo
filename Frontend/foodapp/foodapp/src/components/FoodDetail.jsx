import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a86b5dfc58ce41688bbceb633ade04b4";
  const [food, setFood] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoad(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipedCard}>
        <h1 className={styles.recipedName}>{food.title}</h1>
        <img className={styles.recipedImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕒Time: {food.readyInMinutes} minutes </strong>
          </span>
          <span>
            <strong> 👨‍👩‍👧‍👦Serves: {food.servings} person</strong>
          </span>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐄Vegan" : ""}</span>
        </div>
        <div>
          <span>💵 {food.pricePerServing / 100} PerServing</span>
        </div>
        <h2> Ingredients</h2>
        <ItemList food={food} load={load} />
        <h2> Instructions</h2>
        <div className={styles.recipedInstructions}>
          <ol>
            {load ? (
              <p> Loading ...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li> {step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
