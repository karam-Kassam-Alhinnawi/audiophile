/* eslint-disable react/prop-types */
const CartDetails = ({cart, handleSubmition}) => {
  const taxes = 50;
  const shipping = 50;
  let totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let grandTotal = taxes + shipping + totalPrice;

  return (
    <div className="w-[50%] mx-2 px-10 py-10 bg-white rounded-lg drop-shadow-lg min-h-[500px]">
      <p className="font-bold text-lg">SUMMARY</p>
      {cart.map((detail) => (
        <div key={detail.img} className="flex items-center gap-x-3 mt-6">
            <img src={detail.img} className="w-16 rounded-2xl" alt="" />
           
            <div>
            <p className="text-black text-[14px] font-semibold">{detail.productName}</p>
            <p className="text-black text-[14px]">{detail.price}$</p>
            </div>
            

        </div>
      ))}

      <div className="summaryPrice mt-10">
       
       <div className="flex justify-between mt-4">
       <p>TOTAL: </p>
       <span className="font-bold text-lg">${totalPrice}</span>
       </div>

       <div className="flex justify-between mt-4">
       <p>TAXES: </p>
       <span className="font-bold text-lg">${taxes}</span>
       </div>

       <div className="flex justify-between mt-4">
       <p>SHIPPING: </p>
       <span className="font-bold text-lg">${shipping}</span>
       </div>

       <div className="flex justify-between mt-4">
       <p>GRAND TOTAL: </p>
       <span className="font-bold text-[#D87D4A] mt-4 text-lg">${grandTotal}</span>
       </div>

      <div className="flex justify-center items-center mt-10">
      <button className="rounded-sm w-40 p-3 mt-10 font-semibold transition-all duration-500 relative bg-[#D87D4A] text-white" onClick={handleSubmition}>CONTINUE & PAY</button>
      </div>

      </div>

    </div>
  )
}

export default CartDetails