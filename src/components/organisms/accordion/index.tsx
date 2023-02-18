import { ReactNode, useEffect, useRef, useState } from "react"
import ChevronDown from "../../../icons/chevron-down"
import TextComponent from "../../atoms/text"
import { AccordionContent, ChevronWrapper, Container, TitleWrapper } from "./styled"

interface AccordionProps {
  label: string,
  children: ReactNode
}

const Accordion = ({ label, children }: AccordionProps) => {
  const elementRef = useRef<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const element = elementRef.current;
    if (element && isOpen) {
      const siblingElement = element.nextElementSibling
      const clickAway = (event: any) => {
        const elem = event.target;
        if (!element.contains(elem) && !siblingElement?.contains(elem)) {
          setIsOpen(() => false)
        }
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

  return(
    <>
      <Container ref={elementRef} onClick={handleOnClick}>
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
      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </>
  )
}

export default Accordion