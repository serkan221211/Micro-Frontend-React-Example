import Navbar from "Host/Navbar";
import Products from "../components/Products";

const ProductPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Products />
    </div>
  );
};

export default ProductPage;
