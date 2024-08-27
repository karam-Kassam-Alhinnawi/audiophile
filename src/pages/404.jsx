import Button from "../Components/Button";

const NotFoundPage = () => {
  return (
    <div className="h-[70vh] flex items-center justify-center flex-col">
        <h2 className="text-[40px] text-center md:text-[60px]">404 Page Not Found 😓</h2>
        <Button bgColor='orange' navigatePlace='' rounded='4px'>Return To The Home Page</Button>
    </div>
  )
}

export default NotFoundPage;