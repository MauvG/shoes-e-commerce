import { StarBorder } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Reviews from "./Reviews";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SemiContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-left: 100px;
`;
const Image = styled.img`
  height: 500px;
  width: 500px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 2;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Name = styled.h1`
  margin-top: 50px;
`;
const Price = styled.h1`
  margin-top: 20px;
  font-weight: 300;
`;

const CartButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const SelectMenu = styled.select`
  margin-top: 20px;
  padding: 5px;
  padding-left: 40px;
  padding-right: 30px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid black;
`;
const Size = styled.option``;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h2`
  text-align: center;
  margin-top: 50px;
  font-weight: 300;
`;

const Text = styled.p`
  text-align: center;
  width: 50%;
  margin-top: 10px;
`;

const Rating = styled.h2`
  margin-top: 50px;
  font-weight: 300;
`;

const Stars = styled.div`
  margin: 20px;
`;

const ProductPage = ({ item }) => {
  return (
    <Container>
      <SemiContainer>
        <ImageContainer>
          <Image src={item.image} />
        </ImageContainer>
        <Info>
          <Item>
            <Name>{item.name}</Name>
            <Price>€{item.price}</Price>
            <Heading>Choose Size:</Heading>
            <SelectMenu>
              <Size>5</Size>
              <Size>6</Size>
              <Size>7</Size>
              <Size>8</Size>
              <Size>9</Size>
              <Size>10</Size>
              <Size>11</Size>
              <Size>12</Size>
            </SelectMenu>
            <CartButton>Add to cart</CartButton>
          </Item>
          <Item>
            <Heading>Free Delivery and Returns</Heading>
            <Text>
              Free standard delivery with orders over €50. You can return your
              order for any reason, free of charge, within 30 days. Some
              exclusions apply.
            </Text>
          </Item>
        </Info>
      </SemiContainer>
      <Reviews />
    </Container>
  );
};

export default ProductPage;
