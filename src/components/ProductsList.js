
const ProductsList = ({ products }) => {
  return `
    ${products.map((product) => {
    return `
        <div>
          <h3><a href="/products/${product.id}">${product.name}</a></h3>
          <span>${product.age}</span>
        </div>`
  }).join("")}
  `
}

export default ProductsList 