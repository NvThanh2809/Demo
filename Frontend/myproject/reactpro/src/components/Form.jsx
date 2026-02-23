import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handelChange(e) {
    setName(e.target.value);
  }
  function handelSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <h1>
        {name.lastName} - {name.firstName}
      </h1>
      <h2> Nhập tên</h2>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <h2> Nhập họ</h2>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />

        <button onClick={handelSubmit}> Gửi </button>
      </form>
    </div>
  );
}
// <input onChange={handelChange} type="text" value="First name" />
// <input/> thẻ người dùng nhập dữ liệu từ bàn phím, type: Chọn kiểu nhập văn bản bình thường, value: giá trị in ra.
// <form/> là thẻ HTML dùng để gom các input lại
// (e) => handelChange(e)
// e là event object – đối tượng sự kiện do trình duyệt tạo ra khi gõ
// e.target.value giá trị hiện tại của ô được lấy qua các phương thức target và value
// Có thể truyền trực tiếp onChange={(e) => setName(e.targer.value)} thay cho handelChange(e) mà không cần dùng hàm nữa
// Biến status có thể đc truyền vào 1 đối tượng
// setName({ ...name, lastName: e.target.value }
// ...name : Copy toàn bộ object name, rồi update mỗi lastName
// giúp khi nhập firstName và lastName không bị thay đổi khi nhập vào
// e.preventDefault() : Giữ lại name khi nhấn gửi(ko reload lại app)
