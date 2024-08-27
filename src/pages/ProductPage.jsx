/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import { OuterPageProducts } from "../../data";
import ProductDetails from "../Components/productPage/productDetails";
import ProductDescription from "../Components/productPage/ProductDescription";
import ProductGallery from "../Components/productPage/ProductGallery";
import Eelements from "../Components/Eelements";
import BringingBestGear from "../Components/BringingBestGear";

const ProductPage = ({addToCart}) => {
  const {productId} = useParams();
  const product = OuterPageProducts.find(p => p.id === parseInt(productId));

  return (
    <>
    <ProductDetails product={product} addToCart={addToCart}/>
    <ProductDescription product={product}/>
    <ProductGallery product={product}/>
    <Eelements/>
    <BringingBestGear/>
    </>
  )
}

export default ProductPage