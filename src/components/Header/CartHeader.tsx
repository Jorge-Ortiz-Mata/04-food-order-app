import React from "react";
import CartIcon from "./CartIcon";
import CartText from "./CartText";
import CartNumber from "./CartNumber";

const CartHeader = () => {

  return(
    <div className="flex gap-5 items-center border px-5 py-3 rounded-lg bg-orange-900">
      <CartIcon />
      <CartText />
      <CartNumber />
    </div>
  )
}

export default CartHeader;
