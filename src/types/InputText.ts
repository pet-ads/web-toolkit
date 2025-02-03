import { Dispatch, SetStateAction } from "react";

export interface InputTextProps {
  information: string;
  setInformation: Dispatch<SetStateAction<string>>;
  label: string;
  placeholder?: string;
}
