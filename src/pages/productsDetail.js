import Header from "@/components/Header";
import { products } from "@/data"
import { router } from "@/ultilities";

const ProductsDetailPage = (data) => {
    // console.log(data);
    const currentProduct = products.find((product) => {
        return product.id == data.id;
    });
    if (currentProduct) {
        return `
            ${Header()}
            <h3>${currentProduct.name}</h3>
            ${currentProduct.image}
        `
        
    }
    else{
        return router.navigate('/product')
    }
    // // if(!product) return null;
    // ;
};

export default ProductsDetailPage;