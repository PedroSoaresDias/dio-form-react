import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from "./styles";

export default function Card() {
  return (
    <CardContainer>
      <ImageBackground src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbKO4w_jv8wGJ7IajRaJ7i0UhhnqPyDdBLQ&s' alt='Imagem de fundo' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/106871380?v=4' alt='Imagem do usuário' />
          <div>
            <h4>Pedro Dias</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de  React</h4>
          <p>Projeto feito o curso de React no bootcamp dio da XP Inc...<strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#React</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
