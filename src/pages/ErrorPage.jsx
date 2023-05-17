import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

const Container = styled.div``;
const ErrorElement = styled.div`
  text-align: center;
`;
const Error = styled.h1`
  margin-top: 50px;
  font-weight: 500;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Paragraph = styled.p`
  margin-top: 50px;
  font-size: 18px;
`;
const Link = styled.a`
  color: teal;
  text-decoration: none;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ErrorElement>
        <Error>404</Error>
        <Title>Page Not Found!</Title>
        <Paragraph>
          Unfortunately, the page you are looking for does not exist, please
          click
          <Link href="/"> here </Link> to return back to the homepage.
        </Paragraph>
      </ErrorElement>
      <Footer />
    </Container>
  );
};

export default ErrorPage;
