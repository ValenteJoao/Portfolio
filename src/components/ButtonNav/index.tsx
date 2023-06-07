import { Container } from "./style";



export function ButtonNav({ name, icon }) {

  return (
    <Container>
      {icon}
      <p>{name}</p>
    </Container>
  );
}
