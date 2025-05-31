let queue = [];

function enqueue(){
    const value = prompt("Enter value to enqueue:");
    if(value){
        queue.push(value);

        const box = document.createElement("span");
        box.textContent = value;
        box.className = "queue-box";
        document.getElementById('queue-container').appendChild(box);
    }
}

function dequeue(){
    if(queue.length>0){
        queue.shift();
        const container = document.getElementById("queue-container");
        container.removeChild(container.firstElementChild);
    } else {
        alert("queue is empty!");
    }
}

function resetQueue(){
    const container = document.getElementById("queue-container");
    container.innerHTML = "";
    queue.length = 0 ;
}