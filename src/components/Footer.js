import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, eum. Beatae non voluptate
            </li>
            <li>+91-800-435-1234</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}
