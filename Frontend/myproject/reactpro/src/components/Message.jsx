export default function Message() {
  // javascript ko trong jsx nên không cần {}
  function handleClick() {
    console.log("Buttton Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}> Click here to get a message </button>
    </div>
  );
}
// <button onClick={handleClick}> Click here to get a message </button>
// button là thẻ HTML để tạo nút bấm
// onClick={handelClick} như là gọi hàm sau khi bấm-không được có dấu () sau handelClick
