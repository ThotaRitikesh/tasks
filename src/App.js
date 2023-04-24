// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [selectedUnit, setSelectedUnit] = useState("Select options");
//   const unitOptions = ["option 1", "option 2", "option 3", "option 4","option 5","option 6"];
//   const [isHidden, setIsHidden] = useState(true);

//   const parent = () =>{
//     setIsHidden(false);
//   }

//   const handleSelect = (e) => {
//     setSelectedUnit(e.target.textContent);
//     setIsHidden(true);
//   }

//   return (
//     <div className="App">
//       <div className="middle">
//         <div>
//           <div className="selectDiv" onClick={parent}>
//             {selectedUnit}
//           </div>
//           {!isHidden && (
//             <div id="unitOptions" className="optionsDiv">
//               {unitOptions.map((option) => (
//                 <div key={option} onClick={handleSelect}>
//                   {option}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Button from '@mui/material/Button';
import Alert from "./Alert";
import "./App.css";

function App() {
  const [selectedOptions, setselectedOptions] = useState([]);
  const unitOptions = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  const [isHidden, setIsHidden] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const parent = () => {
    setIsHidden(false);
  }

  const handleSelect = (e) => {
    const option = e.target.textContent;
    if (!selectedOptions.includes(option)) {
      setselectedOptions([...selectedOptions, option]);
    }else {
      // alert("Option already selected!");
      setOpen(true);

    }
  }

  // const handleRemove = (option) => {
  //   const updatedUnits = selectedOptions.filter(unit => unit !== option);
  //   setselectedOptions(updatedUnits);
  // }
  const handleDone = ()=>{
    setIsHidden(true);
  }


  return (
    <div className="App">
      <div className="middle">
        <div>
          <div className="selectDiv" onClick={parent}>
            {selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select options"}
          </div>
          {!isHidden && (
            <div id="unitOptions" className="optionsDiv">
              {unitOptions.map((option) => (
                <div key={option} onClick={handleSelect} className="options">
                  {option}
                </div>
              ))}
            </div>
          )}
          <Button variant="outlined" onClick={handleDone} style={{marginTop:"20px"}}>Save</Button>
          <Alert open={open} handleClose={handleClose}/>
        </div>
      </div>
      {/* <div>
        {selectedOptions.length > 0 && (
          <div className="selectedDiv">
            <div>Selected options:</div>
            {selectedOptions.map((option) => (
              <div key={option} onClick={() => handleRemove(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default App;