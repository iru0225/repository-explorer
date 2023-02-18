import { render, screen } from "@testing-library/react";
import Button from ".";
import { ButtonProps } from "../../../types";

describe('Button component', () => {
  const renderComponent = ({
    id,
    label,
    onClick
  }: ButtonProps) => render(
    <Button id={id} label={label} onClick={onClick}/>
  )

  it('should render component', () => {
    const props = {
      id: 'some-id',
      label: 'some-label',
      onClick: () => null
    }
    renderComponent(props)
    
    const buttonComponent = screen.getByTestId(`${props.id}-button`)
    expect(buttonComponent).toBeInTheDocument()
  })

  it('should have label same with label props', () => {
    const props = {
      id: 'some-id',
      label: 'some-label',
      onClick: () => null
    }
    renderComponent(props)
    
    const buttonComponent = screen.getByTestId(`${props.id}-button`)
    const label = screen.getByText(`${props.label}`)
    expect(buttonComponent).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})