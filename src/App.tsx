import Header from "./components/Header/Header";
import MainWelcome from "./components/Welcome/MainWelcome";
import MainBody from "./components/Body/MainBody";

function App() {

  // function sayHi(): void {
  //   console.log('Hello Fucking New World')
  // }

  return (
    <>
      <Header title='Hello My title' />
      <MainWelcome />
      <MainBody />
    </>
  );
}

export default App;
