import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
  border: none;
  cursor: pointer;
`

export const ChevronWrapper = styled.div<{isOpen: boolean}>`
  margin: auto 0;
  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
`

export const TitleWrapper = styled.div`
  margin: auto 0;
`

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  transition: max-height 0.2s ease-in-out;

  div:first-child {
    margin-top: 8px;
  }
`