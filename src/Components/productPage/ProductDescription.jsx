/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ProductDescription = ({product}) => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row px-6 lg:px-[140px] py-24"> 

      <div>

      <h2 className="font-bold text-4xl">FEATURES</h2>
      <p className=' text-base mt-10 font-medium lg:max-w-[650px]'>
      Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
      </p>
      
      </div>

      <div className="flex flex-col items-start gap-y-4 lg:pr-40 mt-10 lg:mt-0">

      <h2 className="font-bold text-4xl">In The Box</h2>
      
      <p className="text-base font-medium mt-5"><span className="text-orange-500 pr-2 text-sm">2</span>speakers units</p> 
      <p className="text-base font-medium"><span className="text-orange-500 pr-2 text-sm">2</span>Speaker cloth panel</p> 
      <p className="text-base font-medium"><span className="text-orange-500 pr-2 text-sm">1</span>User manual</p> 
      <p className="text-base font-medium"><span className="text-orange-500 pr-2 text-sm">3</span>3.5mm 10m audio cable</p> 
      <p className="text-base font-medium"><span className="text-orange-500 pr-2 text-sm">1</span>10m optical cable</p> 



      </div>

    </div>
  )
}

export default ProductDescription