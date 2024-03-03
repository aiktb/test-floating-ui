import Select from "./components/Select";
import { useState } from "react";
import "./App.css";
function App() {
  const options = ["Option1", "Option2", "Option3"];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Select
        options={options}
        tip="test tip"
        selected={selected}
        onChange={setSelected}
      />
    </div>
  );
}

export default App;
