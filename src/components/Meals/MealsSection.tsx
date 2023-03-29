import MealsList from "./MealsList";

const MealsSection:React.FC = () => {

  return(
    <div className="flex flex-col items-center justify-center p-10 bg-gray-800">
      <MealsList />
    </div>
  )
}

export default MealsSection;
