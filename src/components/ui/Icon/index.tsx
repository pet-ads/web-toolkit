// Types
import { IconProps } from "../../../types/Icon";

// Styles
import { Container } from "./styles";

export default function Icon({ children, color, size, alt,onClick }: IconProps) {
  return (
    <Container
      color={color}
      size={size}
      aria-label={alt}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
