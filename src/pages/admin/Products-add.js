// import { products } from "@/data";
import { addProduct } from "@/api/product";
import { router, useEffect } from "@/ultilities"
import axios from "axios";

const AdminProductsAddPage = () => {
    // const products = JSON.parse(localStorage.getItem('product')) || [];

    useEffect (() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productAge = document.getElementById('product-age');
        const productImages = document.getElementById('product-images');

        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            const urls = await uploadFiles(productImages.files)
            const newProduct = {
                name: productName.value,
                age: productAge.value,
                image: urls
            };
            addProduct(newProduct)
            .then(()=>router.navigate("/admin/products"))
            .catch((error) => {
                console.log(error);
            })
            // axios.post("http://localhost:3000/products", newProduct)
            
            // fetch("http://localhost:3000/products", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(newProduct),
            // })
            
            // Thêm vào mảng
            // products.push(newProduct);
            // console.log(products);

            //  Lưu lại storage
            // localStorage.setItem('product', JSON.stringify(products))
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
        <h1>Thêm mới thành viên</h1>
        <form action="" id="form-add">
        <div class="form-group">
            <label for="">Thêm thành viên</label>
            <input type="text" id="product-name" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Tuổi thành viên</label>
            <input type="text" id="product-age" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Ảnh thành viên</label>
            <input type="file" id="product-images" multiple class="form-control">
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Thêm thành viên</button>
        </div>
        </form>
    </div>`;
    

}



export default AdminProductsAddPage