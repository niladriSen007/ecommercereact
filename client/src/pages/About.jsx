import Hero from '../components/Hero'
import { useGlobalProductContext } from '../contextApi/productContext'

const About = () => {
  const n= useGlobalProductContext();
  const data = {
    name:"Niladri's Ecommerce"
  }
  return (
    <div>
      <Hero myData={data}/>
    </div>
  )
}

export default About