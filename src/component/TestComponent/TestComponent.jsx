import react from "react";
function TestComponent({ onSelect, children }) {
  return (
    <div>
      <button onClick={onSelect}> {children}</button>
    </div>
  );
}
export default TestComponent;
