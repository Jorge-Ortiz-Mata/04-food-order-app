import Header from "./components/Header/Header";
import MainWelcome from "./components/Welcome/MainWelcome";
import MealsSection from "./components/Meals/MealsSection";

function App() {

  // function sayHi(): void {
  //   console.log('Hello Fucking New World')
  // }

  return (
    <>
      <Header title='Hello My title' />
      <MainWelcome />
      <MealsSection />
    </>
  );
}

export default App;
