import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
let [activeItems,setActiveItems] = useState([]);


  let onBuyButton = (item)=>{
   let newItems = [...activeItems,item];
   setActiveItems(newItems)
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          foodItem={item}
          key={item}
          bought={activeItems.includes(item)}
          handleBuyButton={()=>onBuyButton(item)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
