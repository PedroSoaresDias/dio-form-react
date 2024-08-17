import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdPerson, MdEmail, MdLock } from "react-icons/md";

import { Container, Wrapper, LoginText, InfoText, Column, Title, TitleCadastro, SubtitleCadastro } from "./styles";

const schema = yup.object({
  fullName: yup.string().min(3, "Nome completo no mínimo 3 caracteres").required("Campo obrigatório"),
  email: yup.string().email("email não é valido").required("Campo obrigatório"),
  password: yup.string().min(3, "Senha no mínimo 3 caracteres").required("Campo obrigatório"),
}).required();

export default function Cadastro() {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = () => {
    if (isValid) {
      navigate("/feed");
    } else {
      alert("Preencha o formulário de cadastro");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="fullName" errorMessage={errors?.fullName?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Criar minha conta" variant='secondary' type="submit" />
            </form>
              <InfoText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              </InfoText>
              <LoginText>
              Já tenho conta. <span>Fazer login</span>
              </LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
