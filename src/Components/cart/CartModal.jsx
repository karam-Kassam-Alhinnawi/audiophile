/* eslint-disable react/prop-types */
const CartModal = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  return (
    <div className={`fixed inset-0 flex z-[10]
    justify-center items-center transition-colors 
    ${open && 'visible bg-black/20'}
    `} onClick={onClose}>

       
      <div className="bg-white py-10 px-4 w-[400px] min-h-[300px]
      mt-20 mr-1 rounded-xl fixed right-4 top-10">

      {children}
      </div>

      </div>
  );
};

export default CartModal