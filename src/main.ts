interface Product {
  productName: string;
  quantity: number;
  price: number;
}
let products: Product[] = [
  {
    productName: "Phone",
    quantity: 10,
    price: 20000,
  },
  {
    productName: "Smart Watch",
    quantity: 10,
    price: 5000,
  },
];

const renderProducts = () => {
  const productTableBody = document.querySelector(
    "#productTable tbody",
  ) as HTMLTableSectionElement;
  productTableBody.innerHTML = ""; // Clear existing rows

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.productName}</td>
      <td>${product.quantity}</td>
      <td>${product.price}</td>
    `;
    productTableBody.appendChild(row);
  });
};
const addProduct = (product: Product) => {
  products.push(product);
  renderProducts();
};
renderProducts();
const productForm = document.getElementById("productForm") as HTMLFormElement;
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = (
    document.getElementById("productName") as HTMLInputElement
  ).value;
  const quantity = parseInt(
    (document.getElementById("quantity") as HTMLInputElement).value,
    10,
  );
  const price = parseFloat(
    (document.getElementById("price") as HTMLInputElement).value,
  );
  const newProduct: Product = { productName, quantity, price };
  addProduct(newProduct);
  productForm.reset();
});