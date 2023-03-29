import MainText from "./MainText";
import './Welcome.css';
// import ImageBackground from '../../assets/meal.jpg';

const MainWelcome:React.FC = () => {

  return(
    <div className="flex flex-col items-center justify-center image-background">
      <MainText />
    </div>
  )
}

export default MainWelcome;
