import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "1", title: "Product 1" },
  { id: "2", title: "Product 2" },
  { id: "3", title: "Product 3" },
  { id: "4", title: "Product 4" },
  { id: "5", title: "Product 5" },
];
const ProductsPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <p>This is the Products page.</p>

      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
