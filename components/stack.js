let stack = [];

function pushStack(){
    const value = prompt("Enter a value to push:");
    if (value){
        stack.push(value);

        const box = document.createElement("div");
        box.textContent = value;
        box.className = "stack-box";
        document.getElementById("stack-container").appendChild(box);
    }
}

function popStack(){
    if(stack.length>0){
        stack.pop();
        const container = document.getElementById("stack-container");
        container.removeChild(container.lastElementChild);
    } else {
        alert("Stack is empty!");
    }
}

function resetStack(){
    const container = document.getElementById("stack-container");
    container.innerHTML = "";
    stack.length = 0 ;
}