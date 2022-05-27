import {Navbar, NavbarBrand,NavbarToggler, Collapse, Nav} from 'reactstrap';


const NavbarMenu = () => (
<div className='container header klawu'>
  <div className='klawu'>
    <Navbar
      color="light"
      expand="md"
      light
    
    >
          <NavbarBrand href="/">
              <img alt='' src='img/logo.png'/>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
              <Nav
              className="ms-auto"
              navbar-nav
              >
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <a className="nav-link text-black mrml-10" href="/cariMobil">Our Services</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link text-black mrml-10" href="#WhyUs">Why Us</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link text-black mrml-10" href="#Testi">Testimonial</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link text-black mrml-10" href="#FAQ">FAQ</a>
                  </li>
                  <a href="/register"><button  className=" btn-success bwhite mrml-10 bold"> Register </button></a>
              </ul>
              </Nav>
          </Collapse>
          </Navbar>
  </div>
  
</div>
)

export default NavbarMenu