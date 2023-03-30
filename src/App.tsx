import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import MainWelcome from "./components/Welcome/MainWelcome";
import MealsSection from "./components/Meals/MealsSection";

function App() {

  // function sayHi(): void {
  //   console.log('Hello Fucking New World')
  // }

  return (
    <>
      { ReactDOM.createPortal(<Modal />, document.getElementById('modal-root') as HTMLElement) }
      <Header title='Hello My title' />
      <MainWelcome />
      <MealsSection />
    </>
  );
}

export default App;
