let input = document.getElementById('input');
let buttons = document.querySelectorAll("button");
let inputValue = "";

for (item of buttons) {
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText;
        console.log("button",buttonText);

        if(buttonText == "X"){
            buttonText = "*";
            inputValue += buttonText;
            input.value = inputValue;
        }else if(buttonText == "C"){
            inputValue = "";
            input.value = inputValue;
        }else if (buttonText == "="){
            input.value = eval(inputValue);
        }else if(buttonText == "mod"){
            buttonText = "%";
            inputValue += buttonText;
            input.value = inputValue;
        }else{
            inputValue += buttonText;
            input.value = inputValue;
        }
    });
}