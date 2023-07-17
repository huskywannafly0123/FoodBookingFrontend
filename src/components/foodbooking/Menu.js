import FoodItem from "./FoodItem";
import "./css/Menu.css";
import PaymentButton from "./PaymentButton";
import AxiosClient from "../../api/AxiosClient";
import { useEffect, useState } from "react";
function Menu() {
  const [food, setFood] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let food = (await AxiosClient.get("/food")).data;
      food = food.map((item) => {
        return { ...item, subtotal: 0 };
      });
      setFood(food);
    }
    fetchData();
  }, []);

  const handleSubtotalChange = (subtotal, id) => {
    const newFood = [...food];
    newFood[id-1].subtotal = subtotal;
    setFood(newFood);
    const newTotalPrice = newFood.reduce(
      (accumulator, current) => accumulator + current.subtotal,
      0
    );
    setTotalPrice(newTotalPrice);
  }

  return (
    <div className="Menu">
      <form>
        <p className="menuText">Menu</p>
        <div className="MenuItem">
          {food.map((item) => (
            <FoodItem
              id={item.id}
              name={item.name}
              url={item.url}
              price={item.price}
              handleSubTotalPrice = {(subtotal)=>handleSubtotalChange(subtotal,item.id)}
            />
          ))}
        </div>

        <p className="totalPrice">
          Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalPrice}K
        </p>
        <hr className="horizonLineMenu" />
        <div className="paymentButtonDiv">
          <PaymentButton
            text="Momo Payment"
            imgUrl="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg"
            backgroundColor="#ae2070"
          />
          <PaymentButton
            text="Mobile Banking"
            imgUrl="https://cdn.divineshop.vn/static/ed4044413ba8489903d4f27bac88aa02.svg"
            backgroundColor="#005baa"
          />
        </div>
      </form>
    </div>
  );
}

export default Menu;
