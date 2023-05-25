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
        <Review>
          <Username>Liam Thompson</Username>
          <Text>
            <ReviewItem>
              Stylish and Comfortable - Perfect Everyday Shoe!
            </ReviewItem>
            <ReviewItem>★★★★★</ReviewItem>
            <ReviewItem>
              I recently purchased these shoes, and I couldn't be happier with
              my choice! The design is sleek and modern, making them suitable
              for both casual outings and more formal occasions. Not only are
              they stylish, but they are also incredibly comfortable to wear.
              The cushioning provides excellent support for my feet, and I can
              walk in them for hours without any discomfort. The materials used
              are of high quality, ensuring durability and long-lasting
              performance. The shoe also has excellent traction, which is great
              for both indoor and outdoor activities. Overall, I highly
              recommend these shoes for anyone looking for a versatile and
              comfortable footwear option.
            </ReviewItem>
          </Text>
        </Review>

        <Review>
          <Username>Olivia Carter</Username>
          <Text>
            <ReviewItem>
              Great Sports Shoe for Performance and Style!
            </ReviewItem>
            <ReviewItem>★★★★☆</ReviewItem>
            <ReviewItem>
              I bought these shoes specifically for my workouts and sports
              activities, and they have exceeded my expectations. The shoe
              offers fantastic support, especially around the ankles, which is
              crucial for quick movements and stability. The lightweight
              construction allows me to move freely without feeling weighed
              down. The breathability is excellent, preventing my feet from
              getting sweaty during intense workouts. The design is modern and
              eye-catching, making me feel confident and stylish while wearing
              them. The only reason I didn't give them five stars is that they
              took a bit of time to break in. However, after a few uses, they
              became incredibly comfortable. If you're an active individual
              looking for a performance-oriented and stylish shoe, give these a
              try!
            </ReviewItem>
          </Text>
        </Review>

        <Review>
          <Username>Sophia Rodriguez</Username>
          <Text>
            <ReviewItem>Classic Shoe with Timeless Appeal</ReviewItem>
            <ReviewItem>★★★★★</ReviewItem>
            <ReviewItem>
              These shoes have a timeless appeal that goes well with any outfit.
              The simplicity of the design is what makes them so versatile. They
              are suitable for both casual and semi-formal occasions. The
              quality of the craftsmanship is evident in every detail, from the
              stitching to the choice of materials. The shoes are incredibly
              comfortable, thanks to the plush insole and soft lining. The fit
              is perfect, and they provide excellent arch support. Moreover,
              they have proven to be quite durable, as I've been wearing them
              regularly for several months, and they still look as good as new.
              These shoes are a great investment for anyone who appreciates
              classic style and wants a reliable pair that will last for years.
            </ReviewItem>
          </Text>
        </Review>
      </ReviewContainer>
    </Container>
  );
};

export default Reviews;
