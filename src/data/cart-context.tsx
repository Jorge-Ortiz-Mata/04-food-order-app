import React, { useState, useEffect } from "react";
import { meals, MealType } from './meals';

type CartContextProps = {
  modal: boolean
  hasItems: boolean,
  itemsList: MealType[],
  addToCart: (id: number, amount: number) => void,
  removeFromCart: () => void,
  showModal: () => void,
  addOneItem: (id: number) => void,
  removeOneItem: (id: number) => void
}

const CartContext = React.createContext<CartContextProps>({
  modal: false,
  hasItems: false,
  itemsList: [],
  addToCart: ():void => {},
  removeFromCart: (): void => {},
  showModal: ():void => {},
  addOneItem: ():void => {},
  removeOneItem: ():void => {}
});

export const CartContextProvider = ({children}: any) => {
  const [modal, setModal] = useState(false);
  const [hasItems, setHasItems] = useState(false);
  const [itemsList, setItemsList] = useState<MealType[]>(meals);

  useEffect(() => {
    if (itemsList.length > 0)
      setHasItems(true)
    else
      setHasItems(false);
  }, [itemsList])

  const handleAddToCart = (id: number, amount: number):void => {
    const updateItems = itemsList.map((item):MealType => {
      if(item.id === id)
       item.amount += amount;
      return item;
    })

    setItemsList(updateItems);
  }

  const handleRemoveFromCart = ():void => {
    console.log('Removing from the cart');
  }

  const handleModal = (): void => {
    setModal(!modal);
  }

  const handleAddOneItem = (id: number):void => {
    const updateItems = itemsList.map((item):MealType => {
      if(item.id === id)
       item.amount -= 1;
      return item;
    });

    setItemsList(updateItems);
  }

  const handleRemoveOneItem = (id: number):void => {
    const updateItems = itemsList.map((item):MealType => {
      if(item.id === id)
       item.amount += 1;
      return item;
    });

    setItemsList(updateItems);
  }

  return(
    <CartContext.Provider
      value={{
        modal: modal,
        hasItems: hasItems,
        itemsList: itemsList,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        showModal: handleModal,
        addOneItem: handleAddOneItem,
        removeOneItem: handleRemoveOneItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
