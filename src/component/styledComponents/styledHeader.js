import styled, { css } from "styled-components";

export const HeadDiv = styled.header`
  background-color: #000000b8;
  width: 100%;
  height: 10%;
  position: fixed;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  padding: 10px;

  @media all and (max-width: 768px) {
    ${(props) =>
      props.isToggled
        ? css`
            width: fit-content;
            height: 100%;
            flex-direction: column;
            position: absolute;
            left: 0;
            .left{
            flex-direction:column;
            align-items: flex-start;
            }
            ul {
              flex-direction: column;
              align-items: flex-start;
              display: block;
            }
          `
        : css`
            width: 100%;
            height: 10%;
            flex-direction: row;
            background-color: transparent;
            .left{
            flex-direction:row;
    
            }
            ul {
              flex-direction: column;
              align-items: flex-start;
              display: none;
            }
          `}
  }
`;
