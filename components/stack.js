class Stack{
    constructor() {
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
        return "Stack is empty"; 
        }
        return this.items.pop();
    }

    clear() {
        this.items = [];  
    }

    isEmpty() {
        return this.items.length === 0;
    }


}

const stack = new Stack();

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
    if(!stack.isEmpty()){
        stack.pop();
        const container = document.getElementById("stack-container");
        container.removeChild(container.lastElementChild);
    } else {
        alert("Stack is empty!");
    }
}

function resetStack(){
    const container = document.getElementById("stack-container");
    const booleanValue = prompt("Do you want to clear stack? Type 'yes' to confirm:");
    if (booleanValue && booleanValue.toLowerCase() === "yes") {
        stack.clear();
        document.getElementById("stack-container").innerHTML = "";
    }
}