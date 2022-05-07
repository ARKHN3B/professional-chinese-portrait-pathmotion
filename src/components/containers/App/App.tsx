import React    from 'react';
import styled   from "styled-components";

import FlipCard from "components/commons/FlipCard";
import questions from "../../../questions.json";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  padding: 3rem;
  font-weight: 300;
  font-size: 2.4rem;
  text-transform: uppercase;
`;

const CardWrapper = styled.div`
  width: 100vw;
  padding-inline: 1rem;
  padding: 1rem 1rem 3rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 3rem;
`;

function App() {
  return (
    <Container>
      <Title>
        If I was 🤔
      </Title>
      <CardWrapper>
        {
          Object.entries(questions).map(([subject, answerDetail]) => {
            const detail = {
              text: answerDetail.answer,
              description: answerDetail.why,
              link: answerDetail.link
            };
            return (
              <FlipCard subject={subject} detail={detail}/>
            )
          })
        }
      </CardWrapper>
    </Container>
  );
}

export default App;
