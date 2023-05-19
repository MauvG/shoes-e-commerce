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

  const [index, setIndex] = useState(2);

  useEffect(() => {
    for (let i = 0; i < shoes.length; i++) {
      if (shoes[i].name.toLowerCase().replace(/\s/g, "") == url) {
        setIndex(i);
      }
    }
  });

  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductPage item={shoes[index]} />
      <Footer />
    </Container>
  );
};

export default Shoe;
