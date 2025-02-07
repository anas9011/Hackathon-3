import Header from './component/Header'
import HeroSection from './component/HeroSection'
import FeaturesSection from './component/FeaturesSection'
import ProductGallery from './component/ProductGallery'
import PopularProducts from './component/PopularProduction'
import CardPage from './component/Card'
import EmailSection from './component/EmailSection'
import FooterComponent from './component/Footer'




export default function Home() {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <ProductGallery/>
    <PopularProducts/>
    <EmailSection/>
    <CardPage/>
   <FooterComponent/>
  

    </div>
  )
}

