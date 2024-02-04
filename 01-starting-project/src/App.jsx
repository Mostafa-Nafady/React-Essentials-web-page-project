import {useState} from 'react' // to activate state Hooks inside this file
import { CORE_CONCEPTS } from "./data.js";
import { App2 } from "./nafadyTest.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Buttons/Button.jsx"
import Example from "./components/content-section/contentSection.jsx"





// reusable react component 

function CoreConcept({image,title,description,children})
{
  return (
 <li>
    <img src={image}/>
      <h3>{title }</h3>
      <p>{description}</p>
    
</li>
  );
 
}
/* App component */
function App()
{
  /* use state in the begining of the component to activate state in the component  */
  /* selected tab is the dynamic content which we want to change*/
  const [selsctedTab, updateUi] = useState("please select a tab ! ");
  // const x = "hiiiiiiiii"
  
  /* this function to handel the action while the button is clicked */
  
  function selectHandler( selectedButton)
  { 
    console.log("hi iiiii", selectedButton)
    
    updateUi(selectedButton)    
    
    };

  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
          
          <section id="core-concepts" >
          <h2>core concept</h2>
          <ul >
            <CoreConcept { ...CORE_CONCEPTS[0] }
            ></CoreConcept>
            <CoreConcept  {...CORE_CONCEPTS[1]}
            />
            <CoreConcept  {...CORE_CONCEPTS[2]}
            />
            <CoreConcept  {...CORE_CONCEPTS[3]}
            />
      
          </ul>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <Button onSelect={()=>selectHandler("Components")}>components</Button>
              <Button  onSelect={()=>selectHandler("JSX")}>JSX</Button>
              <Button  onSelect={()=>selectHandler("Props")}>Props</Button>
              <Button  onSelect={()=>selectHandler("State")}>state</Button>
            </menu>

           {/* /* dynamic content */ }
            {selsctedTab} 

            

          </section>
           
         <App2/>
        
          {/* {x} */}
          
              
        </section>
       
      </main>
    </div>
  );
}

export { App};
