import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { styled } from "styled-components";

const Container = styled.div``;

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Footer />
    </Container>
  );
};

export default Homepage;
