import React from 'react';
import {
  Container,
  Image,
  Inner,
  Item,
  Pane,
  SubTitle,
  Title,
} from '../styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  //console.log(children);
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

// NOTE: 점표기법 Dot notation
Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;

export default Jumbotron;
