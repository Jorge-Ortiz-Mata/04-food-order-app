import { useContext } from "react";
import CartContext from "../../data/cart-context";
import CustomButton from "../Common/CustomButton";

const ModalMessage = () => {
  const cartCtx = useContext(CartContext);

  function handleCloseModal():void {
    cartCtx.showModal();
  }

  return(
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-xl">No items added</h4>
        <p className="font-semibold">Please add some items to your cart.</p>
      </div>
      <div className="flex items-center justify-end">
        <CustomButton title='Close' onPress={handleCloseModal} />
      </div>
    </div>
  )
}

export default ModalMessage;
