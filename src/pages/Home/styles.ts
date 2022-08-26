import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 994px;
  width: 100%;
  margin: auto;
  padding: 16px;
`;

export const BoxLogo = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

export const BoxTitle = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 33px;
`;

export const BoxForm = styled.section`
  display: flex;
  flew-wrap: nowrap;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 31px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const BoxInput = styled.section`
  flex-grow: 1;
`;

export const BoxButton = styled.section`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  align-self: flex-end;
  border-top: 1px solid #d0d0d0;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
