import { zx7SpeakerDetails } from "../../../../data"
import Button from "../../Button"

const Zx7Speaker = () => {
  return (
    <div className="flex justify-center items-center ">

         <div className="zx7Speaker flex justify-center lg:justify-start items-center flex-col lg:flex-row px-20 w-[330px] md:w-[700px] lg:w-[1020px] h-[600px] lg:h-[300px] rounded-lg relative mb-10" >

            <div className='relative z-50'>
            <h2 className=' text-3xl font-bold text-center md:text-left'>{zx7SpeakerDetails.name}</h2>
            <Button bgColor="transparent" color="black" navigatePlace='speakers' border='2px solid black'>{zx7SpeakerDetails.buttonText}</Button>
            </div>

         </div>

    </div>
  )
}

export default Zx7Speaker