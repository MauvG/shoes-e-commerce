import { styled } from "styled-components";

const Container = styled.div``;
const Image = styled.img``;

const ProductPage = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
    </Container>
  );
};

export default ProductPage;
