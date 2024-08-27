/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const ProductDetails = ({product, addToCart}) => {
  const navigate = useNavigate('/')
  return (
    <>
    <h1 className="lg:ml-40 mt-3 text-gray-600 cursor-pointer" onClick={() => navigate('/')}>Go Back</h1>
    <div className="flex justify-center items-center flex-col lg:flex-row gap-x-40 py-24 px-6 lg:px-0">
      <img src={product.img} className="w-[300px] lg:w-[500px] lg:h-[500px] rounded-xl" alt="" />

      <div>
        <h2 className="font-semibold text-center text-2xl pt-5 lg:pt-0 lg:text-left md:text-4xl">{product.productName}</h2>
        <p className="lg:text-lg lg:max-w-xl mt-5">{product.details}</p>
        <p className="font-semibold text-xl mt-5">${product.price}</p>

        <div className="flex items-end gap-x-4">

        <button className="bg-orange-500 w-[180px] px-2 py-3 text-white font-semibold mt-10" 
        onClick={() => addToCart(product)}>Add To Cart</button>

        </div>

      </div>

    </div>
    </>
  )
}

export default ProductDetails