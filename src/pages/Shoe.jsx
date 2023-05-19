import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductPage";
import { shoes } from "../data";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Shoe = () => {
  const [url, setUrl] = useState(
    location.pathname.toLowerCase().replace("/", "")
  );

  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductPage item={shoes[0]} />
      <Footer />
    </Container>
  );
};

export default Shoe;
