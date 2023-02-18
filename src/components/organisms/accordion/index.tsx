import { useEffect, useRef, useState } from "react"
import ChevronDown from "../../../icons/chevron-down"
import { AccordionProps } from "../../../types"
import TextComponent from "../../atoms/text"
import { AccordionContent, ChevronWrapper, Container, TitleWrapper } from "./styled"

const Accordion = ({ label, children }: AccordionProps) => {
  const elementRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const element = elementRef.current;
    if (element && isOpen) {
      const siblingElement = element.nextElementSibling
      const clickAway = (event: any) => {
        const elem = event.target;
        !element.contains(elem) && !siblingElement?.contains(elem) && setIsOpen(() => false)
      }

      document.addEventListener('click', clickAway)
      return () => {
        document.removeEventListener('click', clickAway)
      }
    }
  }, [isOpen])

  const handleOnClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  const setStyle = (isOpen: boolean) => {
    if (isOpen) {
      return {
          maxHeight: '300px',
          overflow: 'auto'
      }
    }

    return {
      maxHeight: 0,
      overflow: 'hidden'
    }
  }

  return(
    <>
      <Container data-testid='accordion' ref={elementRef} onClick={handleOnClick}>
        <TitleWrapper>
          <TextComponent
            variant='normal'
            label={label}
          />
        </TitleWrapper>
        <ChevronWrapper isOpen={isOpen}>
          <ChevronDown />
        </ChevronWrapper>
      </Container>
      <AccordionContent data-testid='accordion-content' style={setStyle(isOpen)}>
        {children}
      </AccordionContent>
    </>
  )
}

export default Accordion