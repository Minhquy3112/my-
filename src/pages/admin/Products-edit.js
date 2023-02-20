// import { products } from "@/data";
import { getProduct, updateProduct } from "@/api/product";
import { router, useEffect, useState } from "@/ultilities"
import axios from "axios";
const AdminProductsEditPage = ({id}) => {
    // console.log(id);
    // const products = JSON.parse(localStorage.getItem('product')) || [];
    // const currenProduct = products.find((product) => product.id == id);
    // console.log(currenProduct);

    const [product, setProduct] = useState([]);
    // console.log(product );  

    useEffect(()=>{
        
        // axios.get(`http://localhost:3000/products/${id}`)
       
        fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    },[])
    

    useEffect (() => {
        const form = document.getElementById('form-update');
        const productName = document.getElementById('product-name');
        const productAge = document.getElementById('product-age');
        const productImages = document.getElementById('product-images');

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const urls =  uploadFiles(productImages.files)
            const newProduct = {
                id: id,
                name: productName.value,
                age: productAge.value,
                image: urls
            };
            updateProduct(newProduct)
            .then(() =>{
                router.navigate("/admin/products");
            })
            .catch((error) => {
                console.log(error);
            })
            // axios.put(`http://localhost:3000/products/${id}`, newProduct)
            // fetch(`http://localhost:3000/products/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(newProduct),
            
            // Thêm vào mảng
            // const newProducts = products.map((product) => {
            //     return product.id == newProduct.id ? newProduct : product;
            // })
            // console.log(newProduct);

            //  Lưu lại storage
            // localStorage.setItem('product', JSON.stringify(newProducts))
            // Thêm thành công chuyển về trang admin
            
            
        })
        
    })
    const uploadFiles = async(files) => {
        if(files){
            const CLOUD_NAME = "drz5jpxjp";
            const PRESET_NAME = "upload_products";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api =  `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
            const formData = new FormData();
    
            formData.append("upload_preset", PRESET_NAME)
            formData.append("folder", FOLDER_NAME)
    
            for(const file of files){
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers:  {
                        "Content-Type": "multipart/form-data"
                    }
                })
                urls.push(response.data.secure_url)
            }
            return urls;
        }
        
    }
    return `
    <div>
        <h1>Cập nhật thành viên</h1>
        <form action="" id="form-update">
        <div class="form-group">
            <label for="">Thêm thành viên</label>
            <input type="text" id="product-name" class="form-control" value="${product.name}">
        </div>
        <div class="form-group">
            <label for="">Tuổi thành viên</label>
            <input type="text" id="product-age" class="form-control" value="${product.age}">
        </div>
        <div class="form-group">
        <label for="">Ảnh thành viên</label>
        <input type="file" id="product-images" class="form-control" multiple> 
        <img src="${product.image}" alt="">
    </div>
        <div class="form-group">
            <button class="btn btn-primary">Cập nhật</button>
        </div>
        </form>
    </div>`

}

export default AdminProductsEditPage