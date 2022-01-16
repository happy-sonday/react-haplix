import React, { createContext, useContext, useState } from 'react';

import {
  Container,
  Title,
  Inner,
  Body,
  Frame,
  Item,
  Header,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);
  const value = React.useMemo(() => [toggleShow, setToggleShow], [toggleShow]);

  return (
    <ToggleContext.Provider value={value}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  const [toggleShow] = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};

export default Accordion;
