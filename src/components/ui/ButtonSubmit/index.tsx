// Types
import { ButtonSubmitProps } from "../../../types/ButtonSubmit";

// Styles
import { Container } from "./styles";

export default function ButtonSubmit({
  children,
  handleAdd,
}: ButtonSubmitProps) {
  return (
    <Container type="submit" onClick={handleAdd}>
      {children}
    </Container>
  );
}
