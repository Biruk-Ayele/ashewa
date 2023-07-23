"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import utilStyles from '../styles/utils.module.css';


function CollapsibleNav() {
  return (
    <section className={utilStyles.title}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/"><strong className={utilStyles.navbarBrand}>Ashewa</strong>.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#price">Products</Nav.Link>
              <Nav.Link href="#electronics">Suppliers</Nav.Link>
              <NavDropdown title="All Categories" id="collasible-nav-dropdown">
                <NavDropdown title="Home Decor" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Furniture</NavDropdown.Item>
                  <NavDropdown.Item href="">Light & Lighting</NavDropdown.Item>
                  <NavDropdown.Item href="">Home & Garden</NavDropdown.Item>
                  <NavDropdown.Item href="">Construcion & Real Estate</NavDropdown.Item>
                  <NavDropdown.Item href="">Gifts & Crafts</NavDropdown.Item>
                  <NavDropdown.Item href="">Pet Supplies</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Industrial" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Industrial Machinery</NavDropdown.Item>
                  <NavDropdown.Item href="">Vehicles & Transportation</NavDropdown.Item>
                  <NavDropdown.Item href="">Commercial Service Equipment</NavDropdown.Item>
                  <NavDropdown.Item href="">Fabrication Service</NavDropdown.Item>
                  <NavDropdown.Item href="">Tools & Handware</NavDropdown.Item>
                  <NavDropdown.Item href="">Material Handling</NavDropdown.Item>
                  <NavDropdown.Item href="">Power Transmission</NavDropdown.Item>
                  <NavDropdown.Item href="">Electrical Equipment & Supplies</NavDropdown.Item>
                  <NavDropdown.Item href="">Vehicle Parts & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="">Construction & Building Machinery</NavDropdown.Item>
                  <NavDropdown.Item href="">Electronic Components, Accessories & Telecommunications</NavDropdown.Item>
                  <NavDropdown.Item href="">Vehicle Accessories、Electornics & Tools</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Health & Personal Care" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Food & Beverage</NavDropdown.Item>
                  <NavDropdown.Item href="">Medical devices & Supplies</NavDropdown.Item>
                  <NavDropdown.Item href="">Sports & Entertainment</NavDropdown.Item>
                  <NavDropdown.Item href="">Packaging & Printing</NavDropdown.Item>
                  <NavDropdown.Item href="">Personal Care & Household Cleaning</NavDropdown.Item>
                  <NavDropdown.Item href="">Mother, Kids & Toys</NavDropdown.Item>
                  <NavDropdown.Item href="">Health Care</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Fashion & Beauty" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Shoes & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="">Apparel & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="">Luggage, Bags & Cases</NavDropdown.Item>
                  <NavDropdown.Item href="">Jewelry, Eyewear, Watches & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="">Packaging & Printing</NavDropdown.Item>
                  <NavDropdown.Item href="">Beauty</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sport & Entertainment" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Consumer Electronics</NavDropdown.Item>
                  <NavDropdown.Item href="">Home Appliances</NavDropdown.Item>
                  <NavDropdown.Item href="">Sports & Entertainment</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tools & Home Improvment" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Construction & Real Estate</NavDropdown.Item>
                  <NavDropdown.Item href="">Tools & Hardware</NavDropdown.Item>
                  <NavDropdown.Item href="">Lights & Lighting</NavDropdown.Item>
                  <NavDropdown.Item href="">Furniture</NavDropdown.Item>
                  <NavDropdown.Item href="">Renewable Energy</NavDropdown.Item>
                  <NavDropdown.Item href="">Electrical Equipment & Supplies</NavDropdown.Item>
                  <NavDropdown.Item href="">Safety</NavDropdown.Item>
                  <NavDropdown.Item href="">Security</NavDropdown.Item>
                  <NavDropdown.Item href="">Consumer Electronics</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Raw Materials" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Chemicals</NavDropdown.Item>
                  <NavDropdown.Item href="">Metals & Alloys</NavDropdown.Item>
                  <NavDropdown.Item href="">Rubber & Plastics</NavDropdown.Item>
                  <NavDropdown.Item href="">Fabric & Textile Raw Material</NavDropdown.Item>
                  <NavDropdown.Item href="">Agriculture</NavDropdown.Item>
                  <NavDropdown.Item href="">Business Services</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Maintenance, Repair & Operations" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Tools & Hardware</NavDropdown.Item>
                  <NavDropdown.Item href="">Testing Instrument & Equipment</NavDropdown.Item>
                  <NavDropdown.Item href="">Power Transmission</NavDropdown.Item>
                  <NavDropdown.Item href="">Material Handling</NavDropdown.Item>
                  <NavDropdown.Item href="">Safety</NavDropdown.Item>
                  <NavDropdown.Item href="">Security</NavDropdown.Item>
                  <NavDropdown.Item href="">School & Office Supplies</NavDropdown.Item>
                  <NavDropdown.Item href="">Electrical Equipment & Supplies</NavDropdown.Item>
                  <NavDropdown.Item href="">Packaging & Printing</NavDropdown.Item>
                  <NavDropdown.Item href="">Renewable Energy</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Rentals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Second Hand</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="outline-dark">Sign-in / Sign-up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default CollapsibleNav;