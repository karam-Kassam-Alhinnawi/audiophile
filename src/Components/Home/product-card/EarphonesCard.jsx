import earphonesImg from '../../../assets/home/desktop/image-earphones-yx1.jpg'
import Button from '../../Button'

const EarphonesCard = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-x-10 gap-y-5 lg:gap-y-0 mb-10">

    <img src={earphonesImg} className='rounded-lg w-[330px] lg:w-[500px] h-[320px]' alt="" />
 
    <div className='w-[330px] lg:w-[480px] h-[320px] rounded-lg bg-[#f1f1f1] flex justify-center items-start px-10 flex-col'>
       <h2 className='text-3xl font-bold text-center md:text-left'>YX1 EARPHONES</h2>
       <Button navigatePlace='earphones' border='2px solid black'>SEE PRODUCT</Button>
    </div>

    </div>
  )
}

export default EarphonesCard