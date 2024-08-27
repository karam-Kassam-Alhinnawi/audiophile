/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import cartImg from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";

export const NavLinks = () => {
    return(
       <>
          <NavLink to='/' className="navlinks">Home</NavLink>
          <NavLink to='/headphones' className="navlinks">Headphones</NavLink>
          <NavLink to='/speakers' className="navlinks">Speakers</NavLink>
          <NavLink to='/earphones' className="navlinks">Earphones</NavLink>
       </>
    );
}

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
     setOpen(!open)
  }

  return(
    <>
    <nav className="lg:w-1/4 flex justify-end">
      <div className="hidden md:flex justify-between gap-10 font-semibold
       text-white ">
        <NavLinks/>
      </div>
        

      <div className="md:hidden text-white">
        <button onClick={handleNavbar}>
            {open ? <X/> : <Menu/>}
        </button>
      </div>
    </nav>

    {open && (
        <div className=" flex md:hidden flex-col gap-10 items-center basis-full mt-16 text-white">
            <NavLinks/>
            
        </div>
    )}
    </>
  )
}

export const Logo = () => {
  const navigate = useNavigate('');
    return(
      <img src={logo} className="cursor-pointer" onClick={() => navigate('/')}/>
    )
  }

export const Bag = ({cart, handleShowModal}) => {

    return (
        <div className='relative z-[200]' onClick={handleShowModal}>
          <span className="absolute bg-orange-500 px-2 bottom-4 rounded-full text-white font-semibold">{cart.length}</span>
         <img src={cartImg} className="cursor-pointer " alt="" />
        </div>
    )
}
export default Nav