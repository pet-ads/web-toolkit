// External library
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10rem;

  height: 2.5rem;

  padding: 1rem 1rem;

  border: 3px solid var(--secundary-text-color);
  border-radius: 0.5rem;

  background-color: var(--secundary-text-color);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  color: var(--primary-text-color);
  font-size: medium;
  font-weight: bold;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-text-color);
    color: var(--secundary-text-color);
  }
`;
