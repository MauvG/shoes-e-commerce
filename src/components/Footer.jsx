import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1d1d1d;
  color: #a5a3a3;
  margin-top: 100px;
  display: flex;
`;

const Left = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin-top: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #1d1d1d;
  background-color: #a5a3a3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: 150ms;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const CenterLeft = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const CenterRight = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MG Footwear</Logo>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <CenterLeft>
        <Title>Get Help</Title>
        <List>
          <ListItem>Order Status</ListItem>
          <ListItem>Shipping & Delivery</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>Payment Options</ListItem>
          <ListItem>Contact Us</ListItem>
        </List>
      </CenterLeft>
      <CenterRight>
        <Title>About Us</Title>
        <List>
          <ListItem>News</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Sustainability</ListItem>
          <ListItem>Join us</ListItem>
        </List>
      </CenterRight>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Ireland
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +353 12 345 678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@mgfootwear.ie
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
