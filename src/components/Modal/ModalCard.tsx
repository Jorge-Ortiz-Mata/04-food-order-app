import { useContext } from "react";
import CartContext from "../../data/cart-context";
import ModalMealsList from "./ModalMealsList";
import ModalMessage from "./ModalMessage";

const ModalCard = () => {
  const cartCtx = useContext(CartContext);

  return(
    <div className="bg-white p-5 m-5 rounded border-none">
      {
        cartCtx.hasItems
        ? <ModalMealsList />
        : <ModalMessage />
      }
    </div>
  )
}


export default ModalCard;
