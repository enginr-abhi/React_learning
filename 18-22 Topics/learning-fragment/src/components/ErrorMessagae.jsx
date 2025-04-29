import Style from './ErrorMessage.module.css'
const ErrorMessage = ({items}) =>{
  return <>
  {items.length === 0 && <h3 className={Style.error}>I am still hungry.</h3>}
  </>
}
export default ErrorMessage;