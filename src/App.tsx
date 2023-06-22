import { useState } from "react";
import "./theme/App.scss";

function App() {
  const [count, setCount] = useState<number>(0);

  return <>{count}</>;
}

export default App;
