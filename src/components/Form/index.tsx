// External library
import { useState } from "react";

// Component
import InputText from "../ui/InputText";
import ButtonSubmit from "../ui/ButtonSubmit";

// Styles
import { Container } from "./styles";

export default function Form() {
  const [information, setInformation] = useState<string>("");

  const handleClearInputs = () => {
    setInformation("");
  };

  const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (information === "") return;
    alert(`Information: ${information}`);
    handleClearInputs();
  };

  return (
    <Container>
      <InputText
        information={information}
        setInformation={setInformation}
        label="Information"
        placeholder="Enter the Information"
      />
      <ButtonSubmit children="Cadastrar" handleAdd={handleAdd} />
    </Container>
  );
}
