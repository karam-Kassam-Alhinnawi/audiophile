import { useState } from "react";
import cashOnDelviryIcon from '../../assets/checkout/icon-cash-on-delivery.svg';

/* eslint-disable react/prop-types */
const Checkout = ({billingDetails, shippingInfo, handleSubmition,}) => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="px-10 m-10 lg:mx-0 lg:my-0 py-10 bg-white rounded-lg drop-shadow-lg min-h-[100vh]">
        <h2 className='uppercase font-semibold text-3xl'>Checkout</h2>

        <p className="text-[#D87D4A] mt-10 font-medium">Billing Details</p>

        {/*The Inputs for the checkout form*/}

        <form onSubmit={handleSubmition}>

        <div className="flex flex-wrap mt-10 gap-y-10 gap-x-10">
          {billingDetails.map((detail => (

            <div key={detail.placeHolder} className='flex flex-col items-start justify-center '>
            <label>{detail.title}</label>

            <input type="text" placeholder={detail.placeHolder}
             className='border border-gray-300 p-2 px-8 rounded' required/>

            </div>
          )))}
        </div>



        <p className="text-[#D87D4A] mt-10 font-medium">Shipping Info</p>
        <div className="flex flex-wrap mt-10 gap-y-10 gap-x-10">

          {shippingInfo.map((detail => (
            <div key={detail.placeHolder} className={`flex flex-col items-start`}>
            <label>{detail.title}</label>
            <input type="text" placeholder={detail.placeHolder}
             className={`border border-gray-300 p-2 px-8 ${detail.widthFull ? 'lg:w-[36vw]' : ''} rounded ${detail.widthFull ? 'w-[100%]' : ''}`} required/>
            </div>
          )))}
        </div>

        <p className="text-[#D87D4A] mt-10 font-medium">Payment Details</p>
         <p className="pt-10 text-sm">Payment Method</p>

        <div className="flex items-center justify-end">
        
        <div className="flex items-center mt-10">
 

         <div className="flex items-end flex-col gap-y-4">

         <div className={`flex items-center border border-gray-300 px-4 w-[20vw] py-3 rounded-md`}>
        <input type="radio" className="w-4 h-4" name="paymentMethod" id="eMoney" onClick={() => setPaymentMethod('card')} checked={paymentMethod === 'card'}/>  
        <label htmlFor="eMoney" className="font-semibold">
          e-Money
        </label>
      </div>

      <div className="flex items-center border border-gray-300 px-4 w-[20vw] py-3 rounded-md">
        <input type="radio" className="w-4 h-4" name="paymentMethod" id="cashOnDelivery" onClick={() => setPaymentMethod('cash')}/>  
        <label htmlFor="cashOnDelivery" className="font-semibold">
          cash-on-delivery
        </label>
      </div>

          </div>    
        
        </div>

        </div>

        <div>
          {paymentMethod === 'card' ?
          
          <div className="flex items-center justify-between mt-10">

          <div className="flex flex-col">
            <label className="font-bold text-sm mb-3">e-Money Number</label>
            <input type="text" className="border border-gray-300 p-3 w-[20vw] rounded-md" placeholder="0123456789"/>
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm mb-3">e-Money PIN</label>
            <input type="text" className="border border-gray-300 p-3 w-[20vw] rounded-md" placeholder="1234"/>
          </div>


          </div>
         
         :  

         <div className="flex justify-between items-center gap-x-10 mt-10">
           
          <img src={cashOnDelviryIcon} alt="" />

          <p className="text-gray-400">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>

         </div>

        }
        </div>
     
        </form>   


    </div>
  )
}

export default Checkout