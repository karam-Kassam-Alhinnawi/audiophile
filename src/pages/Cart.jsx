import { useState } from "react"
import CartDetails from "../Components/cart/CartDetails"
import Checkout from "../Components/cart/Checkout"
import { useNavigate } from "react-router-dom"

const Cart = ({cart}) => {
  const navigate = useNavigate();

  const [billingDetails, setBillingDetails] = useState([
    {title: "Name", placeHolder: 'Alexi Ward'},
    {title: "Email Address", placeHolder: 'alexi@email.com'},
    {title: "Phone Number", placeHolder: '+ 1 202-555-0136'},
  ]);

  const [shippingInfo, setShippingInfo] = useState([
    {title: "Your Address", placeHolder: "113v Williams Street", widthFull: true},
    {title: "ZIP Code", placeHolder: "10001"},
    {title: "CITY", placeHolder:"New York"},
    {title: "COUNTRY", placeHolder: "United States"}
  ]);


  const handleSubmition = (e) => {
    e.preventDefault();
    navigate('/')
  }


  return (
    <div className="flex items-start flex-col lg:flex-row gap-x-10 justify-center lg:px-60 lg:py-20 ">
        <Checkout handleSubmition={handleSubmition}
         billingDetails={billingDetails} shippingInfo={shippingInfo}
         />
        <CartDetails cart={cart} handleSubmition={handleSubmition}/>
    </div>
  )
}

export default Cart