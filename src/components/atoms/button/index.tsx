import { ButtonProps } from "../../../types"
import { CustomButton } from "./styled"

const Button = ({ id, label, onClick}: ButtonProps) => {
  return(
    <CustomButton
      data-testid={`${id}-button`}
      id={id}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  )
}

export default Button