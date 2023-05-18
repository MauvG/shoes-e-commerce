import { styled } from "styled-components";
import { shoes } from "../data";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category }) => {
  return (
    <Container>
      {shoes.map((item) =>
        item.category === category ? (
          <ProductItem item={item} key={item.id} />
        ) : (
          <></>
        )
      )}
    </Container>
  );
};

export default Products;
