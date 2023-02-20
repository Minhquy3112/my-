import instace from "./config";

const getProducts = () => {
    return instace.get("/products")
};

const getProduct = () => {
    return instace.get(`/products/${id}`)
};

const addProduct = (product) => {
    return instace.post(`/products`, product)
};

const updateProduct = (product) => {
    return instace.put(`/products/${product.id}`, product)
};

const deleteProduct = (id) => {
    return instace.delete(`/products/${id}`)
};

export{getProducts, getProduct, addProduct, updateProduct, deleteProduct}