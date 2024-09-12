import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>Product ID: {params.id}</p>
      <p>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
