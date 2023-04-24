import { useState } from "react";
// import Chip from '@material-ui/core/Chip';
import "./App.css";

function Select({ isMultiSelect }) {
  const [selectedOptions, setselectedOptions] = useState([]);
  const unitOptions = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];
  const [isHidden, setIsHidden] = useState(true);

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <li>{number}</li>
);
  

  const parent = (e) => {
    setIsHidden(isHidden ? false : true);
  }

  const handleSelect = (e) => {
    const option = e.target.textContent;
    if (isMultiSelect) {
      if (!selectedOptions.includes(option)) {
        setselectedOptions([...selectedOptions, option]);
        e.target.classList.add("selectedOption");
      } else {
        const updatedUnits = selectedOptions.filter(unit => unit !== option);
        setselectedOptions(updatedUnits);
        e.target.classList.remove("selectedOption");
      }
    } else {
      setselectedOptions([option]);
      const options = document.querySelectorAll(".options");
      options.forEach(option => option.classList.remove("selectedOption"));
      e.target.classList.add("selectedOption");
      setIsHidden(true);
    }
  }
  return (
    <div className="middle">
        <div>
        <div className="selectDiv" onClick={parent}>
          {selectedOptions.length > 0 ? (<div>{selectedOptions}</div>) : "Select"}
        </div>
        {!isHidden && (
          <div id="unitOptions" className="optionsDiv" >
            {unitOptions.map((option) => (
              <div
                key={option}
                onClick={handleSelect}
                className={`options ${selectedOptions.includes(option) ? "selectedOption" : ""}`}
              >
                <div className="opt">
                {option}
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
    <div>
      <ul>{listItems}</ul>
    </div>
    </div>
  );
}

export default Select;
