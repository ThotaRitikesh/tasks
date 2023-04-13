// import { useEffect, useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const timerRef = useRef();
//   const inputRef = useRef();
//   const [currentTime, setCurrentTime] = useState(0);
//   const [selectedUnit, setSelectedUnit] = useState("seconds");
//   const [timerRunning, setTimerRunning] = useState(false);

//   useEffect(() => {
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const startTimer = () => {
//     setTimerRunning(true);
//     timerRef.current = setInterval(() => {
//       setCurrentTime((prev) => prev - 1);
//     }, 1000);
//   };

//   useEffect(() => {
//     if (currentTime === 0) {
//       clearInterval(timerRef.current);
//       setTimerRunning(false);
//       inputRef.current.value = ""; // Clear input field when timer reaches 0
//     }
//   }, [currentTime]);

//   const handleStart = (e) => {
//     e.preventDefault();

//     if (timerRef.current) clearInterval(timerRef.current);

//     const timeInput = inputRef.current.value;
//     const convertedTime =
//       selectedUnit === "hours"
//         ? timeInput * 3600
//         : selectedUnit === "minutes"
//         ? timeInput * 60
//         : timeInput;
//     setCurrentTime(convertedTime);
//     startTimer();
//   };

//   const handleSelect = (e) => setSelectedUnit(e.target.value);

//   const handleReset = () => {
//     clearInterval(timerRef.current);
//     setCurrentTime(0);
//     inputRef.current.value = "";
//     setTimerRunning(false);
//   };

//   const unitOptions = ["seconds", "minutes", "hours"];

//   const formatTime = (time) => {
//     const date = new Date(time * 1000);
//     const hours = date.getUTCHours().toString().padStart(2, "0");
//     const minutes = date.getUTCMinutes().toString().padStart(2, "0");
//     const seconds = date.getUTCSeconds().toString().padStart(2, "0");
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   return (
//     <div className="App">
//       <div className="header">
//         <button type="reset" onClick={handleReset}>
//           <span class="material-symbols-outlined">restart_alt</span>
//         </button>
//       </div>
//       <div className="middle">
//         <form onSubmit={handleStart}>
//           <input
//             type="number"
//             autoFocus
//             placeholder={`Enter total ${selectedUnit} to countdown`}
//             ref={inputRef}
//             disabled={timerRunning}
//           />
//           <select
//             value={selectedUnit}
//             onChange={handleSelect}
//             disabled={timerRunning}
//           >
//             {unitOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </form>
//       </div>
//       <div className="time">{formatTime(currentTime)}</div>
//     </div>
//   );
// }

// export default App;