function showMessage(){
    let inputBox = document.getElementById("nameInput");
    let userText = inputBox.value;
    let output = document.getElementById("outputText");
    output.innerText = userText;

    alert("Button clicked");
}