import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid darkgray;
  border-radius: 10%;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.h3`
  cursor: pointer;
  margin-left: 25px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  background-color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link href="/">
            <Logo>MG Footwear</Logo>
          </Link>
        </Left>

        <Center>
          <Link href="/Men">
            <Category>Men</Category>
          </Link>
          <Link href="/Women">
            <Category>Women</Category>
          </Link>
          <Link href="/Kids">
            <Category>Kids</Category>
          </Link>
        </Center>

        <Right>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "black", fontSize: 16 }} />
          </SearchContainer>

          <Link href="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link href="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary" href="/cart">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
