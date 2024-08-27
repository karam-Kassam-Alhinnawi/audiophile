import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar";

import Home from "./pages/Home";

import NotFoundPage from "./pages/404";

import ProductPage from "./pages/ProductPage";
import ProductsOuterPage from "./pages/ProductsOuterPage";

import Button from "./Components/Button";

import CartModal from "./Components/cart/CartModal";
import Cart from "./pages/Cart";

import Footer from "./Components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  let totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
        
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
  };
  


  return (
    <>
       <Navbar cart={cart} setCart={setCart} handleShowModal={handleShowModal}/>

       <CartModal open={showModal} onClose={() => setShowModal(false)}>
         <>
         <div className="flex justify-between items-center">
         <p className="font-bold text-xl">Cart: ({cart.length})</p>
         {cart.map((item) => (<p key={item.quantity}>{item.quantity}</p>))}
         <p className="underline cursor-pointer" onClick={() => setCart([])}>Remove All</p>
         </div>

         <div className="mt-10">
         {cart.length > 0 ? 
         cart.map((item) => (
          <div key={item.id} className="flex items-center">
          <img src={item.img} className="w-20 mt-2 rounded-xl" alt="" />
          <div>
          <p className="font-bold ml-2">{item.productName}</p>
          <p className="ml-2">${item.price}</p>
          </div>
        </div>
         )) : <p className="text-center">Your Cart Is Empty</p>
        }
         </div>

         <div className="flex justify-between items-center mt-3">
          <p className="font-semibold">TOTAL</p>

          <p>${totalPrice}</p>
         </div>

         <div className="flex justify-center items-center">
           {cart.length > 0 ?
          <Button bgColor='orange' navigatePlace='cart'>Add To Cart</Button> :
          <Button bgColor='orange' navigatePlace='cart' disabled={true}>Add To Cart</Button> 
          }
         </div>
         </>
       </CartModal>

       <Routes>
        <Route element={<Home/>} path="/" />

        <Route element={<NotFoundPage/>} path="*"/>
        
         <Route path="/products/:productId" element={<ProductPage addToCart={addToCart}/>}/>

        <Route element={<ProductsOuterPage category='headphones'/>} path="/headphones" />
        
        <Route element={<ProductsOuterPage category='speakers'/>} path="/speakers" />
        
        <Route element={<ProductsOuterPage category='earphones'/>} path="/earphones" />

        <Route element={<Cart cart={cart}/>} path="/cart"/>

       </Routes>
       <Footer/>
    </>
  );
};

export default App;
