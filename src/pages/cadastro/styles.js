import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;
`

export const TitleCadastro = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleCadastro = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const InfoText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin: 25px 0;
    line-height: 25px;
`

export const LoginText = styled.p`
    font-style: normal;
    font-weight 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;

    color: #FFF;

    span {
        color: #23DD7A
    }
`