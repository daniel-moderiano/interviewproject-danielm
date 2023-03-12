import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </Button>
    </div>
  );
}

export default App;
