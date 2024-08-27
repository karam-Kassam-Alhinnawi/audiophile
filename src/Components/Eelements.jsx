import { useNavigate } from "react-router-dom"
import { elements } from "../../data/index";
import iconArrowRight from '../assets/shared/desktop/icon-arrow-right.svg'

const Eelements = () => {
  const navigate = useNavigate('/');

  return (
    <div className="my-32">

      <div className="elements flex items-center justify-center flex-col lg:flex-row gap-x-8 gap-y-32 lg:gap-y-0">
         {elements.map((element) => (
           <div key={element.name} className="bg-[#f1f1f1] w-80 h-52 pb-8 flex flex-col justify-center items-center relative rounded-lg">
             <img src={element.img} key={element.name} className="w-44 h-40 -mt-8" alt="" />

             <p className="font-semibold tracking-[3px] uppercase">{element.name}</p>

             <p onClick={() => navigate(`/${element.shop}`)} className='uppercase cursor-pointer mt-6 flex items-center gap-x-4'>Shop <img src={iconArrowRight} alt="" /></p>
           </div>
         ))}
      </div>

    </div>
  )
}

export default Eelements