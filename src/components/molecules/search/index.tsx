import Button from "../../atoms/button"
import Input from "../../atoms/input"
import { Container } from "./styled"

interface SearchComponentProps {
  value: string
  onChange: (event: React.ChangeEvent) => void
  onClick: () => void
}

const SearchComponent = ({
  value,
  onClick,
  onChange
}: SearchComponentProps) => {
  return(
    <Container>
      <Input
        id="search"
        name="search"
        placeholder="Enter username"
        value={value}
        onChange={onChange}
      />
      <Button
        id="search-button"
        label="Search"
        onClick={onClick}
      />
    </Container>
  )
}

export default SearchComponent