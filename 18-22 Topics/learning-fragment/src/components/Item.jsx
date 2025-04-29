
import Style from "./Item.module.css";
const Item = ({ foodItem,handleBuyButton,bought}) => {



  return (
    <li className={`list-group-item  ${Style["kg-item"]} ${bought && 'active'}`}>
      <span className={`${Style["kg-span"]}`}>{foodItem}</span>
      <button className={`btn btn-info ${Style.button} `} onClick={handleBuyButton}>Buy</button>
    </li>
  );
};
export default Item;
