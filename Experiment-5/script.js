const items = [
    { name: "T-Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Headphones", category: "Electronics" },
    { name: "Smartphone", category: "Electronics" },
    { name: "Novel", category: "Books" },
    { name: "Cookbook", category: "Books" }
  ];
  
  const categoryDropdown = document.getElementById("category");
  const productList = document.getElementById("product-list");
  
  function renderProducts(category) {
    productList.innerHTML = "";
  
    let visibleItems = category === "All" 
      ? items 
      : items.filter(product => product.category === category);
  
    if (visibleItems.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No products found!";
      productList.appendChild(li);
    } else {
      visibleItems.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} (${product.category})`;
        productList.appendChild(li);
      });
    }
  }
  
  categoryDropdown.addEventListener("change", () => {
    renderProducts(categoryDropdown.value);
  });
  
  renderProducts("All");
  
