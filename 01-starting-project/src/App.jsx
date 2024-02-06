import {useState} from 'react' // to activate state Hooks inside this file
import { CORE_CONCEPTS } from "./data.js";
import { App2 } from "./nafadyTest.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Buttons/Button.jsx"
import { EXAMPLES } from "./data.js"





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

  const [selectedTab, updateUi] = useState();
  const [clickWarning, showBox] = useState(0);
  const [activeStyle,updateStyle]= useState('')
//  let [activeStyle1,activeStyle2,activeStyl3,activeStyle4]=style
  /* this function to handel the action while the button is clicked */

  function selectHandler( selectedButton)
  { 
    console.log("selectedTab",selectedTab)
    console.log("selectedButton",selectedButton)
    
    updateUi(selectedButton); 
    // updateStyle("active")
    console.log(EXAMPLES[selectedTab]);
  }
  let contentToShow = <p> please select a topic</p>;
  if (selectedTab) {
    contentToShow =  <div id="card" className='active' >
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p className='active'>{EXAMPLES[selectedTab].description}</p>
                <code>{EXAMPLES[selectedTab].code  }</code>
             </div>
  }
 
    /* maximillian task  */
function handelDeleteClick(x){
    showBox (x);
}

  let displayOn = (
    <div className='sasa'> <button className='yellow' onClick={() => handelDeleteClick(1)}>Delete</button>
    </div>);
  
  if (clickWarning)
  {
   displayOn =
    (
        <div data-testid="alert" id="alert" className='card'>
          <h3>Are you sure?</h3>
          <p>These changes can't be reverted!</p>
        <button className="active yellow" onClick={() =>  handelDeleteClick(0) }>Proceed</button>
    </div>)
}
    
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
              <Button  applyActiveStyle={ selectedTab  === "Components" ? 'active': 'inactive' } onSelect={()=>selectHandler("Components")}>components</Button>
              <Button  applyActiveStyle={ selectedTab  === "JSX" ? 'active':'inactive' } onSelect={()=>selectHandler("JSX")}>JSX</Button>
              <Button  applyActiveStyle={ selectedTab  === "props" ? 'active':'inactive' } onSelect={()=>selectHandler("props")}>Props</Button>
              <Button  applyActiveStyle={ selectedTab  === "State" ? 'active':'inactive' } onSelect={()=>selectHandler("State")}>state</Button>
            </menu>

           {/* /* dynamic content */ }
            {/* {selectedTab}  */}

            {/* {EXAMPLES.selectedTab} */}

 
            {/* real dynamic conten to show */}

            
            {/* {selectedTab || ()}
                
            {!selectedTab || (
             ) }
             */}
            {contentToShow}
            <div className='card '>
              <h3 > just to try some thing </h3>
              
            </div>

             {displayOn}
            

          </section>
           
         <App2/>
        
         
          
              
        </section>
       
      </main>
    </div>
  );
}

export { App};
