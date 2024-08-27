import BringingBestGear from "../Components/BringingBestGear"
import Eelements from "../Components/Eelements"
import Hero from "../Components/Home/Hero/Hero"
import EarphonesCard from "../Components/Home/product-card/EarphonesCard"
import Zx7Speaker from "../Components/Home/product-card/zx7Speaker"
import Zx9Speaker from "../Components/Home/product-card/zx9Speaker"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Eelements/>
        <Zx9Speaker/>
        <Zx7Speaker/>
        <EarphonesCard/>
        <BringingBestGear/>
    </div>
  )
}

export default Home