import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";
import { products } from "@/data";

const ProductsPage = () => {
  // console.log(products);
  return `
  ${Header()}
  <div>
   ${ProductsList({products})}
  </div>
  `
};


export default ProductsPage;