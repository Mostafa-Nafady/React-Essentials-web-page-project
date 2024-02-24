import TestComponent from "./component/TestComponent/TestComponent";
import { useState } from "react";
import "./component/TestComponent/test.css";

function App() {
  let [showDynamic, ShowDynamicHandel] = useState("please select u");
  function handelSelectedButton(selectedButton) {
    if (selectedButton === "0") {
      selectedButton = `you have click a button 1`;
    } else if (selectedButton === "1") {
      selectedButton = `you have click a button 2`;
    }
    ShowDynamicHandel(selectedButton);
    /*to see that the usestate function doesn`t executed directlly insteade schedued */
    console.log(showDynamic);
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* Pascalcasing  for write the component name convention*/}
      <h1 className="show">THis is the dynamic content area</h1>
      <div className="buttonStyle">
        <TestComponent onSelect={() => handelSelectedButton("0")}>
          button 1
        </TestComponent>
        <TestComponent onSelect={() => handelSelectedButton("1")}>
          button2
        </TestComponent>
      </div>
      <div className="show">{showDynamic}</div>
    </div>
  );
}

export default App;
