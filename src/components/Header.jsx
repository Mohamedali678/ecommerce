import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header(){

    const [isOpen, setIsOpen] = useState(false)

    const cartItems = useSelector((state) => state.cart.cartItems)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }
    return <div className="bg-primaryColor fixed w-full p-5 flex justify-between text-secondaryColor">
       
        <h1 style={{fontSize: isOpen === true ? "12px" : ""}} className="font-bold text-2xl sm:text-4xl ">E-commerce</h1>

        <i style={{ display: isOpen === true ? "none" : ""}} onClick={handleIsOpen} class="fa-solid fa-bars absolute right-2 text-3xl text-white sm:hidden "></i>
        <i onClick={handleClose} style={{ display: isOpen === true ? "block" : "none"}} class="fa-solid fa-xmark absolute right-2 text-4xl hidden text-white"></i>

        <ul style={{display: isOpen === true ? "block" : ""}} className="hidden sm:flex flex-col space-y-6 sm:space-y-0 mt-10 sm:flex-row sm:mt-0 sm:gap-20 text-2xl sm:text-4xl ">
            <Link to="/">Home</Link>
            <li>About</li>
            <li>Contact us</li>
        </ul>
        
        <ol >
            <Link to="/cart" className="text-4xl  "> <i class="fa-solid fa-cart-shopping mr-10"> </i>
            <h1 className="absolute top-4 text-2xl right-6 ">({cartItems.length} )</h1>
             </Link>
        </ol>

    </div>
}

export default Header