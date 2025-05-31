let linkedList = [];

function insertNode() {
  const value = prompt("Enter value to insert:");
  if (value) {
    linkedList.push(value);

    const container = document.getElementById("linkedlist-container");

    const node = document.createElement("span");
    node.className = "node";
    node.textContent = value;

    const arrow = document.createElement("span");
    arrow.textContent = " → ";

    container.appendChild(node);
    container.appendChild(arrow);
  }
}

function deleteNode() {
  const value = prompt("Enter value to delete:");
  if (!value) return;

  const index = linkedList.indexOf(value);
  if (index === -1) {
    alert("Value not found in the linked list.");
    return;
  }

  linkedList.splice(index, 1);

  const container = document.getElementById("linkedlist-container");
  container.innerHTML = "";

  linkedList.forEach((val, i) => {
    const node = document.createElement("span");
    node.className = "node";
    node.textContent = val;

    container.appendChild(node);
    if (i < linkedList.length - 1) {
      const arrow = document.createElement("span");
      arrow.textContent = " → ";
      container.appendChild(arrow);
    }
  });
}


function resetLinkedList() {
  const container = document.getElementById("linkedlist-container");
  container.innerHTML = "";
  linkedList.length = 0;
}


function searchNode() {
  setTimeout(() => {
    status.textContent = "";
    alert("No Search Option yet!");
  }, 1000);
}
