import { render, screen } from "@testing-library/react";
import Input from ".";
import { InputProps } from "../../../types";

describe('Input component', () => {
  const renderComponent = ({
    id,
    name,
    value,
    placeholder,
    onChange
  }: InputProps) => render(
    <Input 
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )

  it('should render input component', () => {
    const props = {
      id:'some-id',
      name: 'some-name',
      value: '',
      onChange: () => null
    }

    renderComponent(props)
    const input = screen.getByTestId(`${props.name}-input`)
    expect(input).toBeInTheDocument()
  })

  it('should have placeholder', () => {
    const props = {
      id:'some-id',
      name: 'some-name',
      value: '',
      placeholder: 'some placeholder',
      onChange: () => null
    }

    renderComponent(props)
    const input = document.querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input?.placeholder).toEqual(props.placeholder)
  })
})