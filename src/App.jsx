import "./App.css";
import { Sidebar } from "./components/layout/sidebar/Sidebar";
import { Usercard } from "./components/user-card/Usercard";
import { Main } from "./components/layout/main/Main";
import { Button } from "./components/button/Button";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        {/* <Usercard />
        <Button text="Primario" />
        <Button text="Secundario" buttonClass="btn btn--secondary" /> */}
        <Main />
      </div>
    </>
  );
}

export default App;
