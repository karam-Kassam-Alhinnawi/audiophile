import { NavLink } from "react-router-dom"
import { FooterDeatils } from "../../data";

const flexClasses = `flex justify-between items-center`

const Footer = () => {
  return (
    <div className={`lg:h-[40vh] bg-black ${flexClasses} flex-col lg:px-44`}>
        {FooterDeatils.map((detail) => (
         <>
         
         <div className={`${flexClasses} w-full flex-col lg:flex-row `} key={detail.logo}>
            <img src={detail.logo} key={detail.copyRight} className="border-t-4 border-[#d87d4a] pt-10" alt="" />

            <div className="text-white px-20 flex gap-8 pt-10 flex-col lg:flex-row">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/headphones'>Headphones</NavLink>
            <NavLink to='/speakers'>Speakers</NavLink>
            <NavLink to='earphones'>Earphones</NavLink>
            </div>

          </div>

        <div className={`${flexClasses} pb-10 w-full flex-col lg:flex-row`}>
        <p className="text-white max-w-[650px] text-sm md:text-lg mt-10 lg:mt-0">{detail.details}</p>

        <div className="flex gap-x-6 lg:px-20 mt-10 lg:mt-0">
        <img src={detail.socialMedia.facebook} alt="" />
        <img src={detail.socialMedia.instagram} alt="" />
        <img src={detail.socialMedia.twitter} alt="" />
        </div>

        </div>

        <p className="text-white font-bold">{detail.copyRight}</p>
        
         </>



        ))}
    </div>
  )
}

export default Footer