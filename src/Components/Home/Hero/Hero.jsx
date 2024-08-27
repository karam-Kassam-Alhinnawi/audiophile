import { heroData } from "../../../../data/index"
import Button from "../../Button"

const Hero = () => {
  return (
    <div 
    className={`hero relative flex items-center justify-center
     lg:justify-start  lg:px-52`}>

    <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-stretch">


    {heroData.map((data) => (
  
   <>
    <p className=' mid-orange font-semibold text-md tracking-[10px]'
    key={data.paragraph}>{data.paragraph}</p>

    <h1 className="text-white font-[800] text-5xl lg:text-6xl -mt-2" key={data.headingOne}>
        {data.headingOne}
         <br />
         {data.headingTwo}
    </h1>

    <p key={data.dataParagraph} className="text-white 
     text-base max-w-96 text-center lg:text-left -mt-3"
     >{data.dataParagraph}</p>
   </>

    ))}

    <Button bgColor='#d87d4a' color="white" navigatePlace='headphones'>See Product</Button>

    </div>


    </div>
  )
}

export default Hero