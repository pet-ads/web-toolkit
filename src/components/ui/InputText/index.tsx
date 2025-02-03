// Components
import Label from "../Label";

// types
import { InputTextProps } from "../../../types/InputText";

// Styles
import { Container, InputContent } from "./styles";

export default function InputText({
  information,
  setInformation,
  label,
  placeholder,
}: InputTextProps) {
  return (
    <Container>
      <Label children={label} />
      <InputContent
        type="text"
        onChange={(e) => setInformation(e.target.value)}
        value={information}
        placeholder={placeholder || ""}
      />
    </Container>
  );
}
