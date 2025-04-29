import Style from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) =>{
  return <input type="text" name="" className={Style.foodInput} placeholder='Enter Food Item here' onKeyDown ={handleKeyDown}/>
}
export default FoodInput;