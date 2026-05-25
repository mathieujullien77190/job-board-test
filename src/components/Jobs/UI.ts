import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div<{ color: string }>`
  width: 250px;
  height: 250px;
  border-style: solid;
  border-width: 8px;
  border-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    width: calc(50% - 120px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
