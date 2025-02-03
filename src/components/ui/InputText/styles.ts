// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: self-start;

  min-width: 90%;
  max-width: 100%;

  gap: 1rem;

  min-height: 3rem;
  max-height: 10rem;
`;

export const InputContent = styled.input`
  min-width: 100%;
  max-width: 100%;

  min-height: 2.5rem;
  max-height: 2.5rem;

  border-radius: 0.5rem;
`;
