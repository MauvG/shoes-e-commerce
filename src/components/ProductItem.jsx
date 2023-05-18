import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
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

const Button = styled.button`
  /* opacity: 0; */
  margin-top: 10px;
  padding: 5px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  transition: 200ms;
`;

const ImageContainer = styled.div`
  /* border: 1px solid black; */
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;

  &:hover ${Highlight} {
    opacity: 1;
  }

  &:hover ${Button} {
    background-color: #000000;
    color: white;
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Info = styled.div`
  text-align: center;
`;

const Name = styled.p``;
const Price = styled.p`
  font-weight: 700;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Link href={item.name.replace(/\s/g, "")}>
        <ImageContainer>
          <Image src={item.image} />
          <Highlight />
          <Info>
            <Name>{item.name}</Name>
            <Price>€{item.price}</Price>
            <Button>Buy Now</Button>
          </Info>
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default ProductItem;
