import styled from "styled-components";

export const HomeContainer= styled.main`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.5rem;
   }
`

export const CountdownContainer= styled.div`
   font-family: 'Roboto Mono', monospace;
   font-size: 10rem;
   line-height: 8rem;
   color: ${props => props.theme['gray-100']};
   display: flex;
   gap: 1rem;
   span {
      background: ${props => props.theme['bg-dark']};
      padding: 2rem 1rem;
      border-radius: 8px;
   }
`
export const Separator = styled.div`
   padding: 2rem 0;
   color: ${props => props.theme['green-500']};
   width: 4rem;
   overflow: hidden;
   display: flex;
   justify-content: center;
   margin-right: 10px;
`

export const FormContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   font-size: 1.15rem;
   font-weight: bold;
   flex-wrap: wrap;

`

export const Button = styled.button`
   width: 100%;
   border: 0;
   padding: 1rem;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   font-weight: bold;
   cursor: pointer;
   background-color: ${props => props.theme['green-500']};
   color: ${props => props.theme['gray-100']};
   &:not(:disabled):hover {
      background-color: ${props => props.theme['green-700']};
   }
   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      
   }
`

const BaseInput = styled.input`
   background: transparent;
   border: none;
   border-bottom: 2px solid ${props => props.theme['green-300']};
   height: 2.5rem;
   outline: none;
   font-size: inherit;
   padding: 0 0.5rem;
   color: white;
`

export const TaskInput = styled(BaseInput)`
   flex: 1;
   &::-webkit-calendar-picker-indicator {
      display: none !important;
   }
`
export const MinutesAmountInput = styled(BaseInput)`
   width: 4rem;
`