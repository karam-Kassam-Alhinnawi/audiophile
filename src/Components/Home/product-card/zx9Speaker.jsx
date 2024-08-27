import { zx9SpeakerDetails } from "../../../../data"
import Button from "../../Button"

const Zx9Speaker = () => {
  return (
    <div className="flex justify-center items-center ">

         <div className="flex justify-between items-center flex-col lg:flex-row px-10 w-[330px] md:w-[700px] lg:w-[1020px] h-[600px] lg:h-[500px] rounded-lg relative mb-10 pb-10" style={{background: zx9SpeakerDetails.backgroundColor}}>
            <div className='relative lg:w-[1020px] w-[330px] h-[400px] flex flex-col justify-center lg:justify-normal items-center lg:items-stretch'>
            <img src={zx9SpeakerDetails.backgroundImg} className='absolute lg:-left-14 lg:scale-150' alt="" />
            <img src={zx9SpeakerDetails.mainImg} className='absolute w-[200px] lg:w-[450px] h-full object-contain lg:top-14 lg:-left-14' alt="" />
            </div>

            <div className='relative z-50'>
            <h2 className='text-white text-5xl lg:text-7xl font-bold text-center md:text-left'>{zx9SpeakerDetails.name}</h2>
            <p className="text-white text-base md:text-lg text-center lg:text-left">{zx9SpeakerDetails.details}</p>
            <Button bgColor="black" color="white" navigatePlace='speakers'>{zx9SpeakerDetails.buttonText}</Button>
            </div>

         </div>

    </div>
  )
}

export default Zx9Speaker