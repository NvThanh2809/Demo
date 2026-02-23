import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="ảnh" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          {" "}
          Xem công thức
        </button>
      </div>
    </div>
  );
}
// () => {setFoodId(food.id);} : Truyền hàm khi nhập nếu không có () => thì hàm sẽ luôn bị gọi.
