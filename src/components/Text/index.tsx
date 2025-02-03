import { TextContainerProps } from "../../types/Text"
import { TextContainer } from "./styles"

export default function Text({children}: TextContainerProps){
  return (
      <TextContainer as={"span"}>{children}</TextContainer>
  )
}
