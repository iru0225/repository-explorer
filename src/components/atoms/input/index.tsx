import { InputProps } from "../../../types";
import { InputField } from "./styled";

const Input = ({
  id,
  name,
  value,
  placeholder,
  onChange
}: InputProps) => {
  return(
    <InputField
      data-testid={`${name}-input`}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete='off'
    />
  )
}

export default Input