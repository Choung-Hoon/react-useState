import { useState } from "react";

function App() {
  const [time, setTime] = useState(1);
  const handleClick = () => setTime(time >= 12 ? 1 : time + 1);

  console.log("re-rendering");

  return (
    <div>
      <span>현재시가: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
