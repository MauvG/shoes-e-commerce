import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import ProductPage from "../components/ProductPage";
import { shoes } from "../data";

const Container = styled.div``;

const Shoe = () => {
  const [url, setUrl] = useState(
    window.location.href.toLowerCase().replace(/^[^/]+/, "")
  );

  console.log(url);

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
