import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin-left: 110px;
  margin-top: 50px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Categories = () => {
  return (
    <div>
      <Title>Who are you shopping for?</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
