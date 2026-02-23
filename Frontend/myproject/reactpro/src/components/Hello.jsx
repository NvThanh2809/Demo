const name = "David";
function displayMessage() {
  return "omg";
}
function Hello(props) {
  console.log(props);
  // Tr? v? component
  return (
    <div>
      <h1>
        Aloo {props.person.message} {props.person.name}{" "}
        {props.person.seatNumbers}
      </h1>
    </div>
  );
}
// Xu?t component
export default Hello;

// {} dùng ?? chèn JavaScript vào trong th? JSX
// Dùng div ?? b?c các l?nh l?i thành m?t ph?n t? g?c duy nh?t
// Component có th? ???c s? d?ng l?i nhi?u l?n
// Có th? truy?n props (là JavaScript) vào component ?? làm nó tr? nên ??ng
// Dùng console.log(props) ?? th?y props nh? m?t object, dùng ?? debug / in ra
// Có th? truy c?p vào các thu?c tính nh? name, message, ...
// Có 2 cách phân rã (destructure) props:
// 1. Truy?n tr?c ti?p { name, message } thay vì dùng props
// 2. Dùng const { name, message } = props
// Props có th? ???c truy?n v?i m?i ki?u d? li?u nh? chu?i, m?ng, object, ...
