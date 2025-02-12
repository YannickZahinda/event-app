import { ButtonProps } from "../../types/types"

const Button: React.FC<ButtonProps> = ({text, className, onClick})=> {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
