import Header from '../../components/Header'
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

import { Container, Title, TitleHighlight, Column } from "./styles";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3} >
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} name="Pedro Dias" image="https://avatars.githubusercontent.com/u/106871380?v=4" />
          <UserInfo percentual={27} name="Pedro Dias" image="https://avatars.githubusercontent.com/u/106871380?v=4" />
          <UserInfo percentual={89} name="Pedro Dias" image="https://avatars.githubusercontent.com/u/106871380?v=4" />
          <UserInfo percentual={47} name="Pedro Dias" image="https://avatars.githubusercontent.com/u/106871380?v=4" />
          <UserInfo percentual={71} name="Pedro Dias" image="https://avatars.githubusercontent.com/u/106871380?v=4" />
        </Column>
      </Container>
    </>
  )
}
