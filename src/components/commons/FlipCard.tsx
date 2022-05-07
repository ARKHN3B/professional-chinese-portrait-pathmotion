import React  from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 275px;
  height: 175px;
  perspective: 1000px;
`;

const CardInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 800ms;
  transform-style: preserve-3d;
  
  ${CardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  box-shadow: 0px 16px 40px rgba(13, 63, 103, 0.1);
  padding: 1.2rem;
`;

const FrontCardContent = styled(CardContent)`
  background: #A10000;
  color: white;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  
  &:after {
    content: "I will be...";
    position: absolute;
    bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.4;
  }
`;

const BackCardDescriptionContent = styled.text`
  color: #282c34;
`;

const BackCardContent = styled(CardContent)<{link?: string}>`
  background: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.24rem;
  
  ${props => props?.link &&`
    cursor: pointer;
  `}
  
  ${BackCardDescriptionContent} {
    font-size: 0.95rem;
    margin-top: 1rem;
  } 
`;

type FlipCardProps = {
  subject: string,
  detail: {
    background?: {
      color?: string,
      url?: string
    },
    text: string,
    description?: string
    link?: string
  }
};

/**
 * FlipCard Functional Component
 * @return {React.FC<FlipCardProps>}
 */
const FlipCard: React.FC<FlipCardProps> = ({ subject, detail }) => {

  function handleClick() {
    if (!detail?.link) {
      return;
    }
    window.open(detail.link, '_blank')
  }

  return (
    <CardContainer>
      <CardInnerContainer>
        <FrontCardContent>
          {subject}
        </FrontCardContent>
        <BackCardContent onClick={handleClick} link={detail?.link}>
          { detail.text }
          <BackCardDescriptionContent>
            { detail.description }
          </BackCardDescriptionContent>
        </BackCardContent>
      </CardInnerContainer>
    </CardContainer>
  );
};

export default FlipCard;
