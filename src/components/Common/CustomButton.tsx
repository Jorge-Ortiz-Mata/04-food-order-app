interface CustomButtonProps {
  title: string,
  onPress: () => void
}

const CustomButton = ({title, onPress}:CustomButtonProps) => {

  return(
    <button
      onClick={() => { onPress() }}
      className="bg-sky-700 text-white font-semibold px-5 py-2 text-sm rounded-lg"
    >{title}</button>
  )
}

export default CustomButton;
