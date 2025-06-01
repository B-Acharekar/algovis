class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
  }

  remove(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      return true;
    }
    return false;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  reset() {
    this.head = null;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const linkedList = new LinkedList();

function renderLinkedList() {
  const container = document.getElementById("linkedlist-container");
  container.innerHTML = ""; 

  const values = linkedList.toArray();

  if (values.length === 0) {
    container.textContent = "(empty list)";
    return;
  }

  values.forEach((val, i) => {
    const node = document.createElement("span");
    node.className = "node";
    node.textContent = val;
    container.appendChild(node);

    if (i < values.length - 1) {
      const arrow = document.createElement("span");
      arrow.textContent = " → ";
      container.appendChild(arrow);
    }
  });
}

function insertNode() {
  const value = prompt("Enter value to insert:");
  if (value && value.trim() !== "") {
    linkedList.append(value.trim());
    renderLinkedList();
  }
}

function deleteNode() {
  const value = prompt("Enter value to delete:");
  if (!value || value.trim() === "") return;

  const removed = linkedList.remove(value.trim());
  if (!removed) {
    alert("Value not found in the linked list.");
  }
  renderLinkedList();
}

function resetLinkedList() {
  linkedList.reset();
  renderLinkedList();
}

function searchNode() {
  const value = prompt("Enter value to search:");
  if (!value || value.trim() === "") return;

  const found = linkedList.search(value.trim());
  alert(found ? `Value "${value}" found in the linked list.` : `Value "${value}" NOT found.`);
}

renderLinkedList();
