import { styled } from "styled-components";

const Container = styled.div`
  flex: 1px;
  margin: 10px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  border: 5px solid white;
  transition: 100ms;

  &:hover {
    border-color: black;
  }
`;

const Info = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 10px;
  padding-bottom: 100px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link href={item.title}>
        <Image src={item.image} />
      </Link>
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default CategoryItem;
