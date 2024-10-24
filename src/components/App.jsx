import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "../components/Body";

function App() {
  const [state, setState] = useState("Initial State");

  return (
    <>
      <div className="app">
        <Body />
      </div>
    </>
  );
}

export default App;
