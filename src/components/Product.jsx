import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/cart"

function Product({product}){


    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return <div className="m-2 rounded">
    <img className="w-[300px] rounded-xl h-[300px]" src={product.image}  />
    <h1 className="font-semibold">{product.name}</h1>
    <div className="flex justify-between">
        <h1 className="font-bold">{product.price}</h1>
        <button onClick={handleAddToCart} className="w-50 bg-primaryColor rounded-full h-50 p-2">Cart</button>
    </div>
</div>
}

export default Product