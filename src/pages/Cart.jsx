import { useSelector, useDispatch } from "react-redux"
import Header from "../components/Header"
import { calculateTotalPrice, removeFromCart } from "../redux/reducer/cart";
import { useEffect } from "react";
function Cart(){


    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const disptach = useDispatch();

        const handleRemoveItem = (id) => {
            disptach(removeFromCart(id))
            disptach(calculateTotalPrice())
        }
   
        useEffect(() => {
            disptach(calculateTotalPrice())

        },[])

    return <div>
        <Header />
        <p className=" ml-[300px] font-bold text-2xl pt-20">Your shopping cart</p>
    <div className="flex justify-center pt-20 mb-20">
    <div>

        {
            cartItems.length > 0 ?
            cartItems.map((item) => (
                <div className="flex border-2 p-2 border-gray-200 rounded-xl justify-between w-[800px] mt-10">

                <img  className="w-[200px] h-[150px] rounded" src={item.image} />
                <h1 className="font-semibold text-2xl mt-20">{item.name} T</h1>
                <h1 className="font-semibold  text-2xl mt-20">${item.price} </h1>
                <div className="mt-20">
                {/* <i class="fa-solid fa-xmark absolute right-2 text-4xl hidden text-white"></i> */}

                <button onClick={() => handleRemoveItem(item)} className="bg-red-100 px-5 rounded">remove</button>
        
                </div>
                </div>

                    ))
                    :
                    <p>Your cart is Empty</p>
                    }

                    {
                        cartItems.length > 0 && 
                    
                        <>
                        <button className="bg-primaryColor px-20 text-3xl mt-10 rounded-xl py-4">Buy</button>
                        <h1 className="font-bold text-3xl">${totalPrice}</h1>
                                            </>
                    }    
    </div>

    </div>
</div>
}

export default Cart