import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-weight: 300;
`;

const Women = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Women's Shoes</Title>
      <Products category="women" />
      <Footer />
    </Container>
  );
};

export default Women;
