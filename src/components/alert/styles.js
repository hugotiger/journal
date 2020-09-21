import styled from "styled-components";

export const Alert = styled.div`
  /* box-sizing: border-box; */
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  background: #fa4c4d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 999px;
  color: white;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: white;
  /* background: #ffe5e6; */

  svg {
    transform: translateY(1px);
    margin-right: 16px;
  }
  span {
    margin-right: 8px;
  }
`;

export const Styled = { Alert };
