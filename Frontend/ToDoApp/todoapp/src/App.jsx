import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
// <h1 style={header}>: Áp dụng kiểu dáng nội tuyến cho 1 thành phần
// <h1 className="header"> : Áp dụng bảng css đơn giản
// các module cho phép định nghĩa kiểu dáng với cùng 1 tên nhưng vẫn khác nhau về biểu hiện

// background-color: #f7ca18;
// text-align: center; Căn chữ giữa
// font-weight: bold; phông chữ dày
// height: 50px; chiều cao viền
// padding: 10px; khoảng đệm (Khoảng cách từ viền vào nội dung bên trong)
// font-size: 2em;
// border-radius: 8px =>Bo tròn góc(8px-cong nhẹ, 0px: vuông góc, 50%: tròn hẳn)
// width: 500px; (Độ rộng cố định của khối)
// margin: 0 auto; (Căn giữa theo chiều ngang)
// margin-top: 50px; (Đẩy khối xuống dưới 50px)
// display: block; (Biến phần tử thành khối (block))
// width: 100%; (Input kéo full chiều ngang form)
// border: none; (Xóa viền mặc định)
// .modernInput:focus {  outline: none;} : Xóa viền khi ấn vào input
// placeholder="Enter todo item..." (Chữ gợi ý hiển thị trong ô input)
// display: inline-block;
// inline → không padding được
// block → chiếm nguyên hàng (không cần)
// cursor: pointer; (Đổi chuột thành hình bàn tay)

// thẻ<span> bọc để style hoặc xử lý riêng (Không xuống dòng nằm chung hàng với text khác)
