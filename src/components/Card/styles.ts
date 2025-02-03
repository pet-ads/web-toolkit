// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  min-width: 50vw;
  max-width: 50vw;

  height: fit-content;
  min-height: 50vh;
  max-height: 50vh;

  padding: 1rem 2rem;

  gap: 1rem;

  border-radius: 1rem;

  background-color: var(--primary-text-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
