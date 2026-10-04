import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();
  return <div>{category}</div>;
};

export default Products;