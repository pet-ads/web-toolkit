// types
import { LabelProps } from "../../../types/Label";

// Styles
import { Container } from "./styles";

export default function Label({ children }: LabelProps) {
  return <Container>{children}</Container>;
}
