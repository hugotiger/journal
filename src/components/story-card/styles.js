import styled from "styled-components";

const StoryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  h5 {
    font-size: 1rem;
    margin: 0;
    margin-top: 1rem;
    font-weight: 500;
    text-transform: uppercase;

    .country  {
      color: #5f7a8b;
    }
  }
`;

export const Styled = { StoryCard };
