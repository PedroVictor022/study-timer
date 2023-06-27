import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   span {
      font-size: 3rem;
   }

   nav {
      display: flex;
      gap: 0.5rem;
      a {
         width: 3rem;
         height: 3rem;

         display: flex;
         justify-content: center;
         align-items: center;
         border-bottom: 3px solid transparent;
         border-top: 3px solid transparent;
         transition: border-bottom 0.2s;
         &:hover {
            border-bottom: ${props => props.theme["green-300"]} 3px solid; ;
         }
         &.active {
            color: ${props => props.theme["green-300"]};
         }
      }
   }
`;
