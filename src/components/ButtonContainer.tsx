import { ButtonContainerStyled, ButtonVariant } from "./ButtonContainer.styled";


interface variantProps {
    variant?: ButtonVariant,

}

export function Button({ variant = 'primary' }: variantProps) {
    return <ButtonContainerStyled variant={variant}>{variant}</ButtonContainerStyled>
}
