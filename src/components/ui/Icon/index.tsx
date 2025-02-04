// Types
import { IconProps } from "../../../types/Icon";

// Styles
import { Container } from "./styles";

export default function Icon({ children, color, size, alt }: IconProps) {
  return (
    <Container
      color={color}
      size={size}
      aria-label={alt}
    >
      {children}
    </Container>
  );
}
