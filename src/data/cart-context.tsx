import React, { useState, useEffect } from "react";

interface MealObject {
  id: number,
  name: string,
  price: number,
  amount: number
}

type CartContextProps = {
  readonly hasItems: boolean,
  addToCart: (id: number, name: string, price: number, amount: number) => void,
  removeFromCart: () => void,
  itemsList: MealObject[]
}

const CartContext = React.createContext<CartContextProps>({
  hasItems: false,
  addToCart: ():void => {},
  removeFromCart: (): void => {},
  itemsList: []
});

export const CartContextProvider = ({children}: any) => {
  const [hasItems, setHasItems] = useState(false);
  const [itemsList, setItemsList] = useState<MealObject[]>([]);

  useEffect(() => {
    console.log(itemsList)
    console.log(itemsList.length)
  }, [itemsList])

  const handleAddToCart = (id: number, name: string, price: number, amount: number):void => {
    setItemsList((prevState):MealObject[] => {
      return [...prevState, {id: id, name: name, price: price, amount: amount}]
    });
  }

  const handleRemoveFromCart = ():void => {
    console.log('Removing from the cart');
  }

  return(
    <CartContext.Provider value={{addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart, hasItems: hasItems, itemsList: itemsList }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
