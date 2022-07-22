function convert(){
    // lay so tien
    let amount = +document.getElementById("amount").value;
    // tinh ty le
    let form = +document.getElementById("form").value;
    let to = +document.getElementById("to").value;
    let rate = form/to;
    // tinh ket qua
    let result = amount*rate;
    // in ket qua
    document.getElementById("result").innerText = result;
}
// document.getElementById("convert").addEventListener("click", convert);
// document.getElementById("convert").addEventListener("hjsfhajsfh", convert);