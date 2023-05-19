import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-weight: 300;
`;

const CategoryPage = () => {
  const [category, setCategory] = useState(location.pathname.replace("/", ""));

  console.log(category);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category === "Kids" ? "Kids'" : category + "'s"} Shoes</Title>
      <Products category={category.toLowerCase()} />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
