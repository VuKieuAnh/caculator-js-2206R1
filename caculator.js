    //b1: Lay du lieu number1, number2
    //Lấy dữ liệu ngay từ khi load trang web lên

function add(){
    event.preventDefault();
    let number1 = Number(document.getElementById("number1").value) ;
    let number2 = +document.getElementById("number2").value;
    //b2: Tinh toan
    let result = number1 + number2;
    //b3: In ra ket qua
    document.getElementById("result").innerText = result;
}
function subtraction(){
    //b1: Lay du lieu number1, number2
    // let number1 = Number(document.getElementById("number1").value) ;
    // let number2 = +document.getElementById("number2").value;
    //b2: Tinh toan
    let result = number1 - number2;
    //b3: In ra ket qua
    document.getElementById("result").innerText = result;
}