import { Text } from "./style"

interface TextComponentProps {
  variant: 'normal' | 'grey' | 'bold'
  label: string | number
}

const TextComponent = ({ variant, label } : TextComponentProps) => {
  return(
    <Text variant={variant}>
      {label}
    </Text>
  )
}

export default TextComponent