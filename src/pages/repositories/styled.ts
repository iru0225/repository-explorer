import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 85%;
  margin: 16px auto;
  gap: 16px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 16px
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px
`