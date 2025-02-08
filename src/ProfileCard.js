import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
`;

const Card = styled.div`
  width: 300px;
  height: 150px;
  padding: 1rem;
  background: rgba(0, 0, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.44);
  border-left: 2px rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
  transform: skewX(10deg);
  transition: 0.4s;
  overflow: hidden;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    height: 254px;
    transform: skew(0deg);
  }
`;

const Align = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
`;

const Red = styled(Circle)`
  background-color: #ff605c;
`;
const Yellow = styled(Circle)`
  background-color: #ffbd44;
`;
const Green = styled(Circle)`
  background-color: #00ca4e;
`;

const Title = styled.h1`
  text-align: center;
  margin: 1.3rem;
  color: rgb(218, 244, 237);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
`;

const Text = styled.p`
  padding: 0 1rem;
`;

const ProfileCard = () => {
  return (
    <Container>
      <Card>
        <Align>
          <Red />
          <Yellow />
          <Green />
        </Align>
        <Title> Image</Title>
        <Text>
         <h3>FirstName         LastNAme</h3>
         <h3>Gender</h3>
         <h3>Phone</h3>
        </Text>
      </Card>
    </Container>
  );
};

export default ProfileCard;
