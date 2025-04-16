import "./App.css";
import { Sidebar } from "./components/layout/sidebar/Sidebar";
import { Usercard } from "./components/user-card/Usercard";
import { Main } from "./components/layout/main/Main";
import { Modal } from "./components/ui/modal/Modal";
import { Button } from "./components/button/Button";

function App() {
  return (
    <>
      <div className="container">
        {/* <Sidebar />
        <Main /> */}

        <Modal variant="" />
      </div>
    </>
  );
}

export default App;
