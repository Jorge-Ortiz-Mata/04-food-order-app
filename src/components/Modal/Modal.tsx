import { useContext } from "react";
import CartContext from "../../data/cart-context";
import ModalCard from "./ModalCard";

const Modal = () => {
  const { modal } = useContext(CartContext);

  return(
    <div
      className={
        modal
        ? "fixed z-10 bg-gray-900/80 w-screen h-screen flex items-center justify-center"
        : "fixed z-10 bg-gray-900/80 w-screen h-screen hidden items-center justify-center"
      }
    >
      <ModalCard />
    </div>
  )
}

export default Modal;
