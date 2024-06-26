import styled from 'styled-components';


export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

const buttonVariant = {
  primary: 'rgba(0, 166, 255, 1)',
  secondary: 'rgba(125, 125, 125, 1)',
  success: 'rgba(35, 210, 90, 1)',
  danger: 'rgba(210, 35, 35, 1)'
}

const boxShadowVariant = {
  primary: 'rgba(0, 166, 255, 0.7)',
  secondary: 'rgba(125, 125, 125, 0.7)',
  success: 'rgba(35, 210, 90, 0.7)',
  danger: 'rgba(210, 35, 35, 0.7)'
}

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonDivision = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`


export const ButtonContainerStyled = styled.button<ButtonContainerProps>`
    width: 140px;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: all 100ms ease;
    text-transform: capitalize;
    font-size: 1rem;

    color: ${props => props.theme.white};
    background-color: ${props => buttonVariant[props.variant]};

    
  &:active {
    transform: translateY(5px);
    box-shadow: none;
  }

  ${props => {
    return `box-shadow: 0 5px 0 ${boxShadowVariant[props.variant]}`
  }}

`