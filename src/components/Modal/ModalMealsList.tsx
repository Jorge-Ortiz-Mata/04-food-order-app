import { useContext } from "react";
import CartContext from "../../data/cart-context";

import CustomButton from "../Common/CustomButton";
import MealInfo from "../Meals/MealInfo";
import ModalMealAction from "./ModalMealAction";

const ModalMealsList = () => {
  const cartCtx = useContext(CartContext);

  function handleCloseModal():void {
    cartCtx.showModal();
  }

  const addOneitem = (id: number):void => {
    cartCtx.addOneItem(id);
  }

  const remomveOneItem = (id: number):void => {
    cartCtx.removeOneItem(id);
  }

  return(
    <>
      <div className="flex flex-col">
          {
            cartCtx.itemsList.map(meal => {
              return (
                <div className="flex items-center justify-between w-96 my-3 py-1 border-b-2" key={meal.id}>
                  <MealInfo key={meal.id} name={meal.name} description='' price={meal.price} />
                  <span className="font-semibold">x{meal.amount}</span>
                  <div className="flex items-center gap-2">
                    <ModalMealAction symbol="-" onPress={addOneitem} id={meal.id} />
                    <ModalMealAction symbol="+" onPress={remomveOneItem} id={meal.id} />
                  </div>
                </div>
              )
            })
          }
      </div>
      <div className="flex items-center justify-end mt-5">
        <CustomButton title='Close' onPress={handleCloseModal} />
      </div>
    </>
  )
}

export default ModalMealsList
