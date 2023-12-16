import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
  border-radius: 15px;
  background-color: #333333;
  overflow: auto;
`;

export const User = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  border-radius: 15px;
  background-color: #444444;
`;

export const Item = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const TableContainer = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #111111;
  padding: 0 2em 2em 2em;
`;

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #111111;
  margin-bottom: 1em;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
