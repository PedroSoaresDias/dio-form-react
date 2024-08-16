import React from 'react';
import Button from '../Button';

import logoDio from "../../assets/logo-dio.svg"

import { useNavigate } from 'react-router-dom';

import {
  Container,
  Row,
  BuscarInputContainer,
  Input,
  Menu,
  MenuRight,
  Wrapper,
  UserPicture
} from './styles';

export default function Header({ autenticado }) {
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/login");

  const handleSignUp = () => navigate("/cadastro");

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logoDio} alt='Logo da dio' />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/106871380?v=4' alt='Imagem do usuário' />
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar" onClick={handleSignIn} />
              <Button title="Cadastrar" onClick={handleSignUp} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}
