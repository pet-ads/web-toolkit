// Types
import { CardProps } from "../../types/Card";

// Styles
import { Container } from "./styles";

export default function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}
