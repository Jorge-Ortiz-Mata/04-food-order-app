import Meal from "./Meal";
import { meals } from "../../data/meals";

const MealsList:React.FC = () => {

  return (
    <div className="bg-white rounded flex flex-col items-center py-5 px-10 w-2/3">
      {
        meals.map((meal) => {
          return <Meal key={meal.id} {...meal}/>
        })
      }
    </div>
  )
}

export default MealsList;
