
const Button = ({text,btnCls,ClearUser}) => {
  return (
    <div className='btn-container'>
      <button className={btnCls} onClick={ClearUser}>{text}</button>
    </div>
  )
}

export default Button;
