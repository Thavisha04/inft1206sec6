function Multiply() {
    let num1 = document.querySelector('#first-number').value;
    let num2 = document.querySelector('#second-number').value;
    document.querySelector('#output').textContent = "The multiplication of " + num1 + " and " + num2 + " is " + (num1*num2);
    document.querySelector('#output').style.color="blue";
}
document.querySelector('#btn').addEventListener("click", Multiply);