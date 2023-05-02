// تحميل المنتجات من ملف JSON
async function loadProducts() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data.products;
}

// عرض المنتجات على الصفحة
async function showProducts() {
  const products = await loadProducts();
  const container = document.querySelector('.products');
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>${product.price} دولار</p>
    `;
    container.appendChild(div);
  });
}

// تحديث عرض المنتجات بشكل دوري
setInterval(showProducts, 1000);
