// Add To-Do Item
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}

// Filter Products by Category
function filterProducts() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const category = product.getAttribute("data-category");
    if (selectedCategory === "all" || category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Initial display
displayProducts(products);