type TitleProps = {
  title: string
}

const TitleHeader = ({title}: TitleProps) => {

  return(
    <h2 className="font-semibold text-white text-2xl">{title}</h2>
  )
}

export default TitleHeader;
