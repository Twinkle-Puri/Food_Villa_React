import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import FoodItems from "./FoodItems";

const Cart = () => {
  //use selector show what we are subscribing to
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex w-52">
        {cartItems.map((item) => {
          return <FoodItems key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default Cart;
