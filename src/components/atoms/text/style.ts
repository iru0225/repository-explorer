import styled from "styled-components";

type ColorVariantNames = 'normal' | 'grey' | 'bold'

const colorVariant = (variant: ColorVariantNames) => {
  switch (variant) {
    case 'bold':
      return `
        color: black;
        font-weight: 700;
      `
    case 'grey':
      return`
        color: #656565;
        font-weight: 400;
      `
    default:
      return`
        color: black;
        font-weight: 400;
      `
  }
}

export const Text = styled.span<{variant: ColorVariantNames}>`
  ${({ variant }) => variant && colorVariant(variant)}
  font-size: 16px;
`