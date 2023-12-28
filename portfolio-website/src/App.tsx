import { useState } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.About
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
