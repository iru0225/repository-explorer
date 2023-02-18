import StarIcon from "../../../icons/star-icon"
import { CardComponentProps } from "../../../types"
import TextComponent from "../../atoms/text"
import { Container, ContentWrapper } from "./styled"

const CardComponent = ({title, description, star}: CardComponentProps) => {
  return(
    <Container>
      <ContentWrapper>
        <TextComponent
          variant="bold"
          label={title}
        />
        <ContentWrapper>
          <TextComponent
            variant="bold"
            label={star}
          />
          <StarIcon/>
        </ContentWrapper>
      </ContentWrapper>
      <TextComponent
        variant="normal"
        label={description}
      />
    </Container>
  )
}

export default CardComponent