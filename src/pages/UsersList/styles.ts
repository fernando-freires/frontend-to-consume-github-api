import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 3em auto;
  border-radius: 15px;
  background-color: #333333;
  overflow-y: auto;
`;

export const User = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  background-color: #444444;

  &:hover {
    cursor: pointer;
    border: 1px solid gray;
  }
`;
