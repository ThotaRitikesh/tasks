import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const timerRef = useRef();
  const inputRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState("seconds");
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    setTimerRunning(true);
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerRef.current);
      setTimerRunning(false);
      inputRef.current.value = "";
    }
  }, [currentTime]);

  const handleStart = (e) => {
    e.preventDefault();

    if (timerRef.current) clearInterval(timerRef.current);
    const timeInput = inputRef.current.value;

    // const timeInput = parseInt(document.getElementById("timeInput").textContent);
    const convertedTime =
      selectedUnit === "hours"
        ? timeInput * 3600
        : selectedUnit === "minutes"
        ? timeInput * 60
        : timeInput;
    setCurrentTime(convertedTime);
    startTimer();
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setCurrentTime(0);
    document.getElementById("timeInput").textContent = "";
    setTimerRunning(false);
    inputRef.current.value = "";
    setIsHidden(true);
  };

  const unitOptions = ["seconds", "minutes", "hours"];

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  const [isHidden, setIsHidden] = useState(true);

  // const handleClick1 = () => {
  //   setIsHidden(true);
  // };

  const parent = () =>{
    // document.getElementById("unitOptions").classList.toggle("show")
    setIsHidden(false);
  }

  const handleSelect = (e) => {
    setSelectedUnit(e.target.textContent);
    setIsHidden(true);
  }

  return (
    <div className="App">
      <div className="header">
        <button type="reset" onClick={handleReset}>
        <span class="material-symbols-outlined">restart_alt</span>
        </button>
      </div>
      <div className="middle">
        <div contentEditable={timerRunning ? false : true} id="timeInput" className="inputDiv"></div>
        <div>
        <div className="selectDiv" disabled={timerRunning}
        onClick={parent}
        // onClick={() =>document.getElementById("unitOptions").classList.toggle("show")}
        >
          {selectedUnit}
        </div>
        {!isHidden && (
          <div id="unitOptions" className="optionsDiv" >
            {unitOptions.map((option) => (
              <div key={option} onClick={handleSelect}>
                {option}
              </div>
            ))}
          </div>
           )}
           </div>
        <form onSubmit={handleStart}>
           <input
            type="number"
            autoFocus
            placeholder={`Enter total ${selectedUnit} to countdown`}
            ref={inputRef}
            disabled={timerRunning}
          />
          </form>
      </div>
      <div className="time">
      {formatTime(currentTime)}
      </div>
    </div>
  );
}

export default App;