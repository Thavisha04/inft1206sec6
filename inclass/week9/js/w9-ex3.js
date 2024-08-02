function showOutput() {
    let name = document.querySelector('#first-name').value;
    document.querySelector('#output').textContent = "Hello "+name;
    // The .style property gives you access to change styles exactly like CSS usiing JavaScript.
    document.querySelector('#output').style.color="red";
}
// It does not matter if you use single quotes or double quotes when mentioning the id.
document.querySelector('#btn').addEventListener("click", showOutput);