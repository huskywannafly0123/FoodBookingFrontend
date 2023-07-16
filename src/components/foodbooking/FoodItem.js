import "./css/FoodItem.css";
function FoodItem({id,name,price,url}) {
  return (
    <div>
      <div className="oneItem">
        <div className="foodPart">
          <div className="checkFoodDiv">
            <input type="checkbox" className="checkFood" />
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
                <select className="quantitySelect">
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
            <span className="subtotalText">Item subtotal:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.00</span>
          </div>
        </div>
      </div>
      <hr className="horizonLine" />
    </div>
  );
}
export default FoodItem;
