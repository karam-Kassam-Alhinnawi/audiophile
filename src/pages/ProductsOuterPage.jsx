/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { OuterPageProducts } from "../../data/index"
import BringingBestGear from "../Components/BringingBestGear";
import Eelements from "../Components/Eelements";
import SectionName from '../Components/SectionName';


const ProductsOuterPage = ({category, setCart}) => {
  const filteredProducts = OuterPageProducts.filter(product => product.category === category)
  
  return (
        <div>
            <SectionName>{category}</SectionName>
            {filteredProducts.map((product) => (
                <div key={product.id} className={` outer-products flex items-center justify-evenly lg:mx-10 ${product.ltr ? "flex-row-reverse" : ""} p-10 `}>
                    <img src={product.img} className="w-[500px] rounded-xl" />

                    <div>
                     <span className='text-[#d87d4a] tracking-[10px]'>{product.newProduct}</span>
                     <h1 className="text-4xl font-bold uppercase mt-5">{product.productName}</h1>
                     <p className=" max-w-[530px] mt-10 font-medium mb-10">{product.details}</p>
                     <Link to={`/products/${product.id}`} className="bg-[#d87d4a] p-5 text-white">See Product</Link>
                    </div>
                    

                </div>
 
            ))}
             
             <Eelements/>
            <BringingBestGear/>
        </div>
  )
}

export default ProductsOuterPage