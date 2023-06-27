import { ButtonContainer, ButtonVariant } from "./Button.styles";
interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>oslks</ButtonContainer>;
}
