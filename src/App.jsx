import "./App.css";
import { Sidebar } from "./components/layout/sidebar/Sidebar";
import { Usercard } from "./components/layout/user-card/Usercard";
import { Main } from "./components/layout/main/Main";

function App() {
  return (
    <>
      <div className="hola">
        <Sidebar />
        {/* <Usercard /> */}
        <Main />
      </div>
    </>
  );
}

export default App;
