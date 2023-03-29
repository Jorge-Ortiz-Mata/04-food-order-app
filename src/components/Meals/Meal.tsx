import { useContext } from 'react';
import CartContext from '../../data/cart-context';

import MealInfo from './MealInfo';
import MealForm from './MealForm';

interface MealProps {
  id: number,
  name: string,
  description: string,
  price: number
}

const Meal = ({id, name, description, price}:MealProps) => {
  const cartCtx = useContext(CartContext);

  const handleSubmit = (amount: number): void => {
    cartCtx.addToCart(id, name, price, amount);
  }

  return (
    <div className="border-2 py-2 px-10 m-2 flex justify-between items-center w-full gap-10">
      <MealInfo name={name} description={description} price={price} />
      <MealForm onSubmitAmount={handleSubmit} />
    </div>
  )
}

export default Meal;
