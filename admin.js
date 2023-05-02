// تحميل المعلومات من ملف JSON
async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

// حفظ المعلومات إلى ملف JSON
async function saveData(data) {
  const response = await fetch('data.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.ok;
}

// إضافة منتج جديد
async function addProduct(title, description, price) {
  const data = await loadData();
  const newProduct = {
    id: Date.now(),
    title: title,
    description: description,
    price: price
  };
  data.products.push(newProduct);
  const saved = await saveData(data);
  return saved ? newProduct : null;
}

// التحكم في إرسال النموذج
const form = document.getElementById('add-product-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const product = await addProduct(title, description, price);
  if (product) {
    alert('تمت إضافة المنتج بنجاح!');
    form.reset();
  } else {
    alert('حدث خطأ أثناء إضافة المنتج!');
  }
});
