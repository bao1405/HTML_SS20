let a = 6;
let result = ++a + a + a++ + ++a + a;

console.log(result);
// ++a là tăng 1 giá trị trước khi thực hiện phét toán tử
// a++ thì nếu có phép toán tử tiếp theo thì sẽ tăng 1 giá trị rồi thực hiện phép toán 