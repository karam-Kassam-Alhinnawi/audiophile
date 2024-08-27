import { bestGear } from "../../data"

const BringingBestGear = () => {
  return (
    <div className="flex justify-evenly items-center flex-col lg:flex-row px-10 lg:px-[170px] py-5 lg:py-0 mb-10">

     <div className="max-w-[460px]">
     <h2 className="text-5xl font-bold">{bestGear.name1} <br /> <span className="best-gear-span">{bestGear.spanName}</span> {bestGear.name2} </h2>
    
    <p className=" mt-10">{bestGear.details}</p>
     </div>


     <div>
        <img src={bestGear.img} className="h-[400px] md:h-[500px] lg:w-[476px] mt-10 lg:mt-0" alt="" />
     </div>
     
    </div>
  )
}

export default BringingBestGear