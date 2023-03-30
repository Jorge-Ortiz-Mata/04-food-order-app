import { useContext } from "react";
import CartContext from "../../data/cart-context";

const ModalCard = () => {
  const cartCtx = useContext(CartContext);

  function handleClick():void {
    cartCtx.showModal();
  }

  return(
    <div className="bg-white p-5 m-5 rounded border-none">
      <span onClick={handleClick}>Close Modal</span>
    </div>
  )
}


export default ModalCard;
