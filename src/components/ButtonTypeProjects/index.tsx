import { Container, ContainerActive } from "./style";

type buttonProps = {
  name: string;
  icon: JSX.Element;
  activeButton: Boolean;
  click: any;
};

export function ButtonNav({ name, icon, activeButton, click }: buttonProps) {

  return (<>
    {activeButton ? <ContainerActive>{icon}<p>{name}</p></ContainerActive> : <Container onClick={click}>{icon}<p>{name}</p></Container>}

  </>
  );
}
