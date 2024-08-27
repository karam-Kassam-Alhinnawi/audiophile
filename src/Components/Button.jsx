import { useNavigate } from "react-router-dom"

const Button = ({children, bgColor, color, navigatePlace, border, rounded, disabled}) => {
  const navigate = useNavigate('/');

  return (
    <button onClick={() => navigate(`/${navigatePlace}`)}  
    disabled={disabled} 
    className={`rounded-sm w-40 p-3 mt-10 font-semibold transition-all duration-500 relative`}
    style={{background: bgColor, color: color, border: border, borderRadius: rounded}}>
      {children}
    </button>
  )
}

export default Button