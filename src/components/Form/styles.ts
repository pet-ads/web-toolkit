// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  min-width: 80%;
  max-width: 80%;

  min-height: 80%;
  max-height: 80%;

  gap: 2rem;

  border-radius: 0.5rem;

  background-color: var(--primary-text-color);

  font-size: medium;
`;
