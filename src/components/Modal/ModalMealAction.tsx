interface ModalMealActionProps {
  readonly id: number
  symbol: string,
  onPress: (id: number) => void
}

const ModalMealAction = ({id, symbol, onPress}:ModalMealActionProps) => {

  const handleOnClick = ():void => {
    onPress(id);
  }

  return(
    <div
      onClick={handleOnClick}
      className="font-bold text-lg border bg-orange-700 text-white py-2 px-5 rounded-lg cursor-pointer"
    >
      {symbol}
    </div>
  )
}

export default ModalMealAction;
