import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styled/StyledHeader";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { Button } from "./styled/Button.styled";

export default function Header() {
  return (
    <StyledHeader bg="seagreen">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Comunity Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussions.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
