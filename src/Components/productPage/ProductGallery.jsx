/* eslint-disable react/prop-types */
const ProductGallery = ({product}) => {

  const leftSideClasses = `
 w-[250px] lg:w-[450px] rounded-2xl 
  `
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:px-[150px] my-10 lg:gap-x-10">
      <div className="flex flex-col gap-y-5">
        <img src={product.additonalImgs.img1} className={`${leftSideClasses} lg:h-[200px]`} alt="" />
        <img src={product.additonalImgs.img2} className={`${leftSideClasses} lg:h-[300px]`} alt="" />
      </div>
      <img src={product.additonalImgs.img3} className="rounded-2xl w-[300px] lg:w-[600px] mt-5 lg:mt-0 lg:h-[520px]" alt="" />
    </div>
  )
}

export default ProductGallery