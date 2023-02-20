// import { products } from "@/data";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "@/ultilities";
import { deleteProduct, getProducts } from "@/api/product";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // fetch("http://localhost:3000/products")
    // .then(response => response.json())
    // .then(data => setProducts(data))
    // const products = JSON.parse(localStorage.getItem('product')) || []
    // setData(products)
    // axios.get("http://localhost:3000/products").then(({data}) => setProducts(data));
    getProducts()
    .then(({data}) => setProducts(data))
    .catch((error) => {
      console.log(error);
  })
  }, [])

  useEffect(()=>{
    const btns = document.querySelectorAll(".btn-remove");
    for(let btn of btns){
      btn.addEventListener("click", function(){
        // console.log(btn);
        const id = this.dataset.id; 
        const confirm =  window.confirm("Bạn có chắc chắn muốn xóa không?");
        if(confirm) {
              deleteProduct(id)
            .then(()=>{
              const newsProducts = products.filter((product) => product.id != id);
              setProducts(newsProducts)
            })
            .catch((error) => {
              console.log(error);
          })
        }
        
        // axios.delete(`http://localhost:3000/products/${id}`)
        

        // fetch(`http://localhost:3000/products/${id}`, {
        //   method: "DELETE",
        // }).then(()=>{
        //   const newsProducts = products.filter((product) => product.id != id);
        //   setProducts(newsProducts)
        // })
      })
    }
  });
  return `
  ${Header()}
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>TÊN</th>
          <th>TUỔI</th>
          <th>ẢNH   </th>
          <th>HÀNH ĐỘNG</th>
        </tr>
      </thead>
      <tbody>
        ${products.map((product, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.age}</td>
            <td><img src="${product.image}" width="100px" alt=""></td>
            
            <td>
              <button data-id="${product.id}" class="btn-remove btn btn-primary">Xóa</button>
              
              <a class="btn btn-warning"href="/admin/products_edit/${product.id}" >Sửa</a>
            </td>
        </tr>
        
        `
        ).join("")}
        
      </tbody>
      <button> <a class="btn btn-danger" href="/admin/products_add">Thêm mới</a></button>
  </table>
`

};

export default AdminProductsPage