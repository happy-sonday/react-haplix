import React from 'react';
import Footer from './components/footer/footer';
import Jumbotron from './components/jumbotron/Jumbotron';
import jumboData from './fixtures/jumbo.json';

// const App:React.FC<Props> = () => {
//   //return <> 왜?</>;
//   return <Jumbotron>점보트론!!</Jumbotron>;
// };

const App = () => {
  return (
    <>
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

      <Footer>
        <Footer.Title>질문이 있으신가요? 문의전화 010-9655-8120</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href='#'>자주 묻는 질문</Footer.Link>
            <Footer.Link href='#'>투자정보</Footer.Link>
            <Footer.Link href='#'>개인정보</Footer.Link>
            <Footer.Link href='#'>속도 테스트</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>고객 센터</Footer.Link>
            <Footer.Link href='#'>입사 정보</Footer.Link>
            <Footer.Link href='#'>쿠키 설정</Footer.Link>
            <Footer.Link href='#'>법적 고지</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>계정</Footer.Link>
            <Footer.Link href='#'>지원 디바이스</Footer.Link>
            <Footer.Link href='#'>회사 정보</Footer.Link>
            <Footer.Link href='#'>오직 해플릭스에서</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>미디어 센터</Footer.Link>
            <Footer.Link href='#'>이용 약관</Footer.Link>
            <Footer.Link href='#'>문의하기</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>해피 해플릭스 mrsmiler1106@gmail.com</Footer.Text>
      </Footer>
    </>
  );
};
export default App;
