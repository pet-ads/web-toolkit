// External library
import styled from "styled-components";

export const Container = styled.svg<{ size?: string; color?: string }>`
  display: flex;
  justify-content: end;

  width: ${(props) => props.size || "1.25rem"};

  height: ${(props) => props.size || "1.25rem"};

  color: ${(props) => props.color || "white"};
`;
