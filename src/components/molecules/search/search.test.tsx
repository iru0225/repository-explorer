import { render, screen } from "@testing-library/react";
import SearchComponent from ".";
import { SearchComponentProps } from "../../../types";

describe('Search component', () => {
  const renderComponent = ({
    value,
    onClick,
    onChange
  }: SearchComponentProps) => render(
    <SearchComponent
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  )

  it('should render component', () => {
    const props = {
      value: '',
      onChange: () => null,
      onClick: () => null
    }
    renderComponent(props)

    const input = screen.getByTestId('search-input')
    const button = screen.getByTestId('search-button-button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})