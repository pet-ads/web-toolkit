// Types
import { LinkButtonProps } from "../../../types/LinkButton.ts";

// Styles
import LinkButton from "./styles.ts";

export default function RedirectButton({ link, children }: LinkButtonProps) {
  const handleClick = () => {
    window.open(link, "_blanck"); 
  };

  return <LinkButton as={"button"} rel="noopener noreferrer" onClick={handleClick}>{children}</LinkButton>;
}
