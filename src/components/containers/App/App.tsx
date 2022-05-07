import React    from 'react';
import styled   from "styled-components";

import FlipCard                                    from "components/commons/FlipCard";
import questions                                   from "../../../questions.json";
import Header                                      from "../Header";
import Footer                                      from "../Footer";

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem;
`;

const CardWrapper = styled.div`
  padding-inline: 1rem;
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 3rem;
`;

function App() {
  return (
    <Container>
      <Header/>
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
      <Footer/>
    </Container>
  );
}

export default App;
