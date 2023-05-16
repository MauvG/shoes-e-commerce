import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``

const Men = () => {
  return (
    <Container>
        <Navbar  />
        <Announcement />
        <Products />
        <Footer />
    </Container>
  )
}

export default Men;