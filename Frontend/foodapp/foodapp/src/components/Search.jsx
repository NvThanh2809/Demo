const API_KEY = "a86b5dfc58ce41688bbceb633ade04b4";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!query) return;
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  // [query] : Điều kiện khi query thay đổi thì sẽ gọi hàm useEffect
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.foodform}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            value={query}
            placeholder="Nhập tên món ăn..."
          />
          <button className={styles.modernButton} type="submit">
            🔍
          </button>
        </div>
      </form>
    </div>
  );
}
