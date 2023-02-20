const products = [
    {   id: 1, 
        name: "Nguyễn Minh Quý", 
        age: 19,
        link: "", 
        image:"" 
    },
    {   id: 2, 
        name: "Nguyễn Quang Hậu", 
        age: 19,
        link: "", 
        image:"" 
    },
    {   id: 3, 
        name: "Vương Xuân Cường", 
        age: 23,
        link: "", 
        image:'<img src="../img/277311971_499719071626573_8866604484079226778_n.jpg" width="100px" alt="">'
    },
];

const menuList = [
    {name: 'Home', path:'/'},
    {name: 'About', path:'/about'},
    {name: 'Products', path:'/products'},
    {name: 'Admin', path:'/admin/products'},
]

export {products, menuList};