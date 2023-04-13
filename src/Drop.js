/* eslint-disable no-lone-blocks */
import { useState, useRef, useEffect } from "react";

function DropdownMenu({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setShowOptions(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={() => setShowOptions(!showOptions)}>
        {selectedOption}
      </div>
      {showOptions && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;

        {/* <div className="selectDiv" onClick={() => document.getElementById("unitOptions").classList.toggle("show")}>{selectedUnit}
          <div id="unitOptions" className="optionsDiv">
            {unitOptions.map((option) => (
              <div key={option} onClick={handleSelect}>
                {option}
              </div>
            ))}
          </div>
        </div> */}