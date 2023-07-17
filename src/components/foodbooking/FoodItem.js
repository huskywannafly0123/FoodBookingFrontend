import "./css/FoodItem.css";
import { useEffect, useState } from "react";
function FoodItem({id,name,price,url,handleSubTotalPrice}) {
  const [quantity,setQuantity] = useState(1);
  const [subtotal,setSubtotal] = useState(0);
  function quantityChange(event){
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    const checkbox = document.querySelector("#checkboxId"+id);
    checkbox.checked = true;
    setSubtotal(newQuantity*price);
  }
  function checkboxChange(event){
    const checkbox = event.target;
    if(checkbox.checked){
      setSubtotal(quantity*price);
    }
    else{
      setSubtotal(0);
    }
  }

  useEffect(()=>{
    handleSubTotalPrice(subtotal);
  },[subtotal]);
  return (
    <div>
      <div className="oneItem">
        <div className="foodPart">
          <div className="checkFoodDiv">
            <input type="checkbox" className="checkFood" id={"checkboxId"+id} onChange={checkboxChange}/>
          </div>
          <div class="imageDiv">
            <img
              className="foodImage"
              alt="Pizza Neapolitan Product Image"
              src={url}
              loading="lazy"
            />
          </div>
          <div className="descriptionDiv">
            <div>
              <span className="foodName">{name}</span>
            </div>
            <div>
              <label>
                <span className="quantityText">Quantity</span>
                <select className="quantitySelect" value={quantity} onChange={quantityChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="pricePart">
          <div>
            <span className="priceText">{price}k</span>
          </div>
          <div className="subtotalDiv">
            <span className="subtotalText">Item subtotal:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subtotal}k</span>
          </div>
        </div>
      </div>
      <hr className="horizonLine" />
    </div>
  );
}
export default FoodItem;
