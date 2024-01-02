import Product from "./Product"
import products from "./Products"

function ProductList() {

    return <div className="flex gap-10 mx-20 mb-10 mt-32">

        {
            products.map((data) => (
                <Product product={data} />
            ))
        }

    </div>
}

export default ProductList