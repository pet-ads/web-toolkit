// Types
import { TextContainerProps } from "../../../types/Text"

// Styles
import { TextContainer } from "./styles"

export default function Text({children}: TextContainerProps){
  return (
      <TextContainer as={"span"}>{children}</TextContainer>
  )
}
