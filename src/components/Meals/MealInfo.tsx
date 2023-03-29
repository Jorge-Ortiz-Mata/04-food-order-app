interface MealInfoProps {
  name: string,
  description: string,
  price: number
}

const MealInfo = ({name, description, price}:MealInfoProps) => {

  return(
    <div className="flex flex-col">
      <span className="font-bold text-base">{name}</span>
      <span className="font-semibold text-sm">{description}</span>
      <span className="font-bold text-sm">${price} USD</span>
    </div>
  )
}

export default MealInfo;
