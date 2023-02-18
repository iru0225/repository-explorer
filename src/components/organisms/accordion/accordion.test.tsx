import { act, fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";
import { AccordionProps } from "../../../types";

describe('Accordion component', () => {
  const renderComponent = ({
    label,
    children
  }: AccordionProps) => render(
    <>
      <button>click me</button>
      <Accordion label={label}>
        {children}
      </Accordion>
    </>
  )

  it('should render component', () => {
    const props = {
      label: 'accordion label',
      children: <span>accordion content</span>
    }
    renderComponent(props)

    const label = screen.getByText(props.label)
    const content = screen.getByTestId('accordion-content')

    expect(label).toBeInTheDocument()
    expect(content.style.maxHeight).toEqual('0')
  })

  it('should open accordion content', () => {
    const props = {
      label: 'accordion label',
      children: <span>accordion content</span>
    }
    renderComponent(props)

    const accordion = screen.getByTestId('accordion')
    const content = screen.getByTestId('accordion-content')

    act(() => {
      fireEvent.click(accordion)
    })

    expect(content.style.maxHeight).toEqual('300px')
  })

  it('should close accordion content', () => {
    const props = {
      label: 'accordion label',
      children: <span>accordion content</span>
    }
    renderComponent(props)

    const accordion = screen.getByTestId('accordion')
    const content = screen.getByTestId('accordion-content')
    const button = screen.getByText('click me')

    act(() => {
      fireEvent.click(accordion)
    })
    act(() => {
      fireEvent.click(button)
    })

    expect(content.style.maxHeight).toEqual('0')
  })
})
