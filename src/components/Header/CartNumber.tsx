import { useContext } from "react";
import CartContext from "../../data/cart-context";

const CartNumber = () => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;

  cartCtx.itemsList.forEach(item => {
    totalAmount += item.amount;
  })

  return(
    <p className="text-sm text-white font-semibold border p-1 rounded-full bg-orange-700">
      {totalAmount}
    </p>
  )
}

export default CartNumber;
