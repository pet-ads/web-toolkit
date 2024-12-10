import { TextContainerProps } from "../../types/Text"
import { TextContainer } from "./styles"

export default function Text({children}: TextContainerProps){
  return (
      <TextContainer>{children}</TextContainer>
  )
}
