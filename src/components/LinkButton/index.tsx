import { LinkButtonProps } from "../../types/LinkButton.ts";
import LinkButton from "./styles.ts";

export default function RedirectButton({ link, children }: LinkButtonProps) {
  const handleClick = () => {
    window.location.href = link;
  };

  return <LinkButton onClick={handleClick}>{children}</LinkButton>;
}
