import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  /* margin: 10px; */
`;

const Highlight = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;

  &:hover ${Highlight} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Info = styled.div`
  padding-left: 10px;
`;

const Name = styled.p``;
const Price = styled.p``;
const Link = styled.a``;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Link href={item.name.replace(/\s/g, "")}>
        <ImageContainer>
          <Image src={item.image} />
          <Highlight />
        </ImageContainer>
      </Link>
      <Info>
        <Name>{item.name}</Name>
        <Price>€{item.price}</Price>
      </Info>
    </Container>
  );
};

export default ProductItem;
