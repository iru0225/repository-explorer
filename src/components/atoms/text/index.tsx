import { TextComponentProps } from "../../../types"
import { Text } from "./style"

const TextComponent = ({ variant, label } : TextComponentProps) => {
  return(
    <Text variant={variant}>
      {label}
    </Text>
  )
}

export default TextComponent