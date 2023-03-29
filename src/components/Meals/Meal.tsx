import MealInfo from './MealInfo';
import MealForm from './MealForm';

interface MealProps {
  name: string,
  description: string,
  price: number
}

const Meal = ({name, description, price}:MealProps) => {

  const handleSubmit = (amount: number): void => {
    console.log(amount);
  }

  return (
    <div className="border-2 py-2 px-10 m-2 flex justify-between items-center w-full gap-10">
      <MealInfo name={name} description={description} price={price} />
      <MealForm onSubmitAmount={handleSubmit} />
    </div>
  )
}

export default Meal;
