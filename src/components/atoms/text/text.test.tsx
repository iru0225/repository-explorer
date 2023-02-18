import { render, screen } from "@testing-library/react";
import TextComponent from ".";
import { TextComponentProps } from "../../../types";

enum Variant {
  NORMAL = 'normal',
  GREY = 'grey',
  BOLD = 'bold'
}

describe('Text component', () => {
  const renderComponent = ({
    variant,
    label
  }: TextComponentProps) => render(
    <TextComponent
      variant={variant}
      label={label}
    />
  )

  it('should render component', () => {
    const props = {
      variant: Variant.GREY,
      label: 'some label'
    }
    renderComponent(props)

    const label = screen.getByText(props.label)
    expect(label).toBeInTheDocument()
  })
})