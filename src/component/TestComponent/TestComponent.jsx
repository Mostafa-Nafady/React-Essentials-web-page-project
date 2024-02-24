import react from "react";
import "./test.css";
function TestComponent({ onSelect, children, isSelected }) {
  console.log(isSelected);
  return (
    <div>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
export default TestComponent;
