import NavbarMenu from './Navbar';
import MobilMenu from './Mobil'
import WhyUsMenu from './WhyUs'; 
import SewaMenu from './Sewa'
import AccordionMenu from './AccordionMenu';
import FooterMenu from './FooterMenu';
import WanitaMenu from './Wanita';
import TestimoniMenu from './Testimoni';


function Landing() {
    return (
      <div>
            <NavbarMenu />
            <MobilMenu/>
            <WanitaMenu/>
            <WhyUsMenu/>
            <TestimoniMenu />
            <SewaMenu/>
            <AccordionMenu/>
            <FooterMenu/>
      </div>
    );
  }
  
  export default Landing;
