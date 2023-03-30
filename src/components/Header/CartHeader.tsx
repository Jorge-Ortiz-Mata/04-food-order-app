import { useContext } from "react";
import CartContext from "../../data/cart-context";

import CartIcon from "./CartIcon";
import CartText from "./CartText";
import CartNumber from "./CartNumber";


const CartHeader = () => {
  const cartCtx = useContext(CartContext);

  const handleClick = ():void => {
    cartCtx.showModal();
  }

  return(
    <div className="flex gap-2 items-center border px-3 py-2 rounded-lg bg-orange-900 cursor-pointer" onClick={handleClick}>
      <CartIcon />
      <CartText />
      <CartNumber />
    </div>
  )
}

export default CartHeader;
