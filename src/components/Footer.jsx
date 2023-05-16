import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 90px;
    background-color: #1a1a1a;
`
const Left = styled.div`
    flex: 1;
`

const Logo = styled.h1``
const Description = styled.p``

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const SocialContainer = styled.div`
    display: flex;
    color: #a7a7a7;
`

const Social = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: 200ms;
    &:hover {
        color: #ffffff
    }
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MG Footwear</Logo>
            <Description></Description>
        </Left>
        <Center></Center>
        <Right>
            <SocialContainer>
                <Social><Facebook /></Social>
                <Social><Instagram /></Social>
                <Social><Twitter  /></Social>
                <Social><YouTube /></Social>
            </SocialContainer>
        </Right>
    </Container>
  )
}

export default Footer