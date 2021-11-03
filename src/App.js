import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MySkills } from "./components/MySkils/MySkills";
import { MyWorks } from "./components/MyWorks/MyWorks";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MySkills />
      <MyWorks />
    </div>
  );
}

export default App;
