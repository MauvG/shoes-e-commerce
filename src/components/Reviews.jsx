import { reviews } from "../data";

import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  StarBorder,
} from "@material-ui/icons";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  transition: 200ms;
  /* border: 1px solid black; */
`;

const Collapsible = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const Title = styled.h4`
  padding: 20px;
`;

const Stars = styled.div`
  padding: 20px;
`;

const Arrow = styled.div`
  padding: 20px;
`;

const ReviewContainer = styled.div`
  display: ${(props) => props.display};
  overflow: hidden;
  text-align: left;
  padding: 10px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 20px;
`;

const Username = styled.h4`
  /* background-color: #e6e5e5; */
  background-color: #f2f2f2;
  border: 1px solid black;
  text-align: right;
  padding: 5px;
  padding-right: 20px;
`;

const Text = styled.div`
  /* border: 1px solid black; */
  /* background-color: #f2f2f2; */
`;

const ReviewItem = styled.div`
  padding: 10px;
  padding-left: 20px;
`;

const Reviews = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Collapsible onClick={handleClick}>
        <Title>Reviews</Title>
        <Stars>
          <StarBorder /> <StarBorder /> <StarBorder /> <StarBorder />
          <StarBorder />
        </Stars>
        <Arrow>{active ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Arrow>
      </Collapsible>
      <ReviewContainer display={active ? "block" : "none"}>
        {reviews.map((item) => (
          <Review key={item.id}>
            <Username>{item.username}</Username>
            <Text>
              <ReviewItem>{item.title}</ReviewItem>
              <ReviewItem>{item.stars}</ReviewItem>
              <ReviewItem>{item.description}</ReviewItem>
            </Text>
          </Review>
        ))}
      </ReviewContainer>
    </Container>
  );
};

export default Reviews;
