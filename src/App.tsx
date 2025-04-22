import "@styles/theme.css";
import "@styles/global.css";

import { Container } from "@components/Container";
import { Menu } from "@components/Menu";
import { Logo } from "@components/Logo";
import { CountDown } from "@components/CountDown";
import { Input } from "@components/Input";

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
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <Input
              id="inputTask"
              type="text"
              labelText="Tarefa"
              placeholder="Digite Algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
