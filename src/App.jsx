import About from "./components/layout/About"
import Banner from "./components/layout/Banner"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Portfolio from "./components/layout/Portfolio"
import Service from "./components/layout/Service"
import Testimonial from "./components/layout/Testimonial"

function App() {
 return (
   <>
    <Navbar/>
    <Banner/>
    <About/>
    <Portfolio/>
    <Service/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App
