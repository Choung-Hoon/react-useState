import { useState } from "react";

const heavyWork = () => {
  console.log("1. heavyWork called");
  return ["홍길동", "김민수"];
};

const haevyWorkCallback = () => {
  // useState로 초기값을 가져올때
  // 부하가 걸리는 경우, 초기값 할당 함수를 callback으로 지정하면
  // 상태값 변경 시, 재실행되지 않음
  console.log("2. heavyWorkCallback called");
  return "";
};

function App() {
  console.log("App started");
  //const [names, setNames] = useState(["홍길동", "김민수"]);
  const [names, setNames] = useState(heavyWork());
  const [input, setInput] = useState(() => haevyWorkCallback());

  // console.log(`'names' : '${names}'`);
  // console.log(`'input' : '${input}'`);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleDirectUpload = () => {
    console.log("이전 값과 상관없이 상태값 변경");
    setNames([input, ...names]);
    return;
  };

  const handleCallbackUpload = () => {
    console.log("이전 값과 연관된 작업을 할 경우, setState 함수의 인자를 콜백함수로 처리한다.");
    setNames((prevState) => {
      console.log("prevState : " + prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleDirectUpload}>Direct-Upload</button>
      <button onClick={handleCallbackUpload}>Callback-Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
