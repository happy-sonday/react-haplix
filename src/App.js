import React from 'react';
import Jumbotron from './components/jumbotron/Jumbotron';
import jumboData from './fixtures/jumbo.json';

// const App:React.FC<Props> = () => {
//   //return <> 왜?</>;
//   return <Jumbotron>점보트론!!</Jumbotron>;
// };

const App = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
};
export default App;
