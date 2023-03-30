import React, { useState, useEffect } from "react";

interface MealObject {
  id: number,
  name: string,
  price: number,
  amount: number
}

type CartContextProps = {
  modal: boolean
  hasItems: boolean,
  itemsList: MealObject[],
  addToCart: (id: number, name: string, price: number, amount: number) => void,
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
  const [itemsList, setItemsList] = useState<MealObject[]>([]);

  useEffect(() => {
    if (itemsList.length > 0)
      setHasItems(true)
    else
      setHasItems(false);
  }, [itemsList])

  const handleAddToCart = (id: number, name: string, price: number, amount: number):void => {
    setItemsList((prevState):MealObject[] => {
      return [...prevState, {id: id, name: name, price: price, amount: amount}]
    });
  }

  const handleRemoveFromCart = ():void => {
    console.log('Removing from the cart');
  }

  const handleModal = (): void => {
    setModal(!modal);
  }

  const handleAddOneItem = (id: number):void => {
    console.log('Adding one item');
    console.log(id)
  }

  const handleRemoveOneItem = (id: number):void => {
    console.log('Removing one item');
    console.log(id)
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
