import { render, screen } from "@testing-library/react";
import CardComponent from ".";
import { CardComponentProps } from '../../../types'

describe('Card component', () => {
  const renderComponent = ({
    title,
    description,
    star
  }: CardComponentProps) => render(
    <CardComponent
      title={title}
      description={description}
      star={star}
    />
  )

  it('should render component', () => {
    const props = {
      title: 'Card title',
      description: 'Some description',
      star: 12
    }
    renderComponent(props)

    const title = screen.getByText(props.title)
    const description = screen.getByText(props.description)
    const star = screen.getByText(props.star)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(star).toBeInTheDocument()
  })
})