const BASE_URL = 'http://localhost:5000/api'; // غيّر إذا غيرت الباك اند

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
}

export async function getProductsByCategory(id) {
  const res = await fetch(`${BASE_URL}/categories/${id}/products`);
  return res.json();
}

export async function getProductDetails(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}
