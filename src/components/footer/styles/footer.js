import styled from 'styled-components/macro';

export const Container = styled.footer`
  display: flex;
  padding: 70px 45px;
  margin: auto;
  max-width: 1100px;
  flex-direction: column;
  box-sizing: content-box;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  column-count: 4;
  @media screen and (max-width: 768px) {
    column-count: 3;
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
