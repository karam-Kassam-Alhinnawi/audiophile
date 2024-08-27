/* eslint-disable react/prop-types */
import Nav, { Bag, Logo } from "./Nav";

const Navbar = ({cart, setCart, handleShowModal}) => {
  return (
    <div className="relative z-50 p-8 bg-[#191919] border-b border-white lg:px-40 flex flex-wrap items-center justify-between w-full mx-auto">
     <Logo/>
     <Nav/>
     <Bag cart={cart} setCart={setCart} handleShowModal={handleShowModal}/>
     
    </div>
  )
}


export default Navbar 