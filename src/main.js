import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector('#app');
import AboutPage from "./pages/about";
import AdminProductsPage from "./pages/admin/Products";
import AdminProductsAddPage from "./pages/admin/Products-add";
import AdminProductsEditPage from "./pages/admin/Products-edit";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/NotFound";
import ProductsPage from "./pages/products";
import ProductsDetailPage from "./pages/productsDetail";
import { render, router } from "./ultilities";

router.on('/', () =>{
    render(HomePage, app)
});

router.on('/about', () =>{
    render(AboutPage, app)
});

router.on('/products', () =>{
    render(ProductsPage, app)
})

router.on('/products/:id', ({data})=>{
    // console.log(data);
    render(()=>{
        // console.log(data);
        return ProductsDetailPage(data)
    }, app)
})

// ADMIN
router.on('/admin/products', () =>{
    render(AdminProductsPage, app)
})

router.on('/admin/products_add', () =>{
    render(AdminProductsAddPage, app)
})

// router.on('/admin/products_edit/:id', ({data}) =>{
//     render(()=> {
//         return AdminProductsEditPage(data)
//     }, app)
// })
router.on('/admin/products_edit/:id', ({data}) => render(() => AdminProductsEditPage(data), app))


router.notFound(()=>{
    render(NotFoundPage, app)
})

router.resolve();




