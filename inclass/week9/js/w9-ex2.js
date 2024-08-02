function showGreetingMessage() {
    let name = window.prompt("What is your name?");
    window.alert("Hello "+name);
}

//showGreetingMessage();
// To reference the button we use query selector method and this method belongs to the document object. 
document.querySelector("#btn").addEventListener("click",showGreetingMessage);
