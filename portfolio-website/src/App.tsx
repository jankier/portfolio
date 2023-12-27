import { useState } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.About
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
