import "@styles/theme.css";
import "@styles/global.css";

import { Container } from "@components/Container";
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        tempore omnis aperiam eveniet totam architecto molestias incidunt
        dolorem voluptatibus aspernatur et reiciendis nobis voluptates alias
        maxime temporibus rerum impedit voluptate.
      </Container>

      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        tempore omnis aperiam eveniet totam architecto molestias incidunt
        dolorem voluptatibus aspernatur et reiciendis nobis voluptates alias
        maxime temporibus rerum impedit voluptate.
      </Container>
    </>
  );
}
