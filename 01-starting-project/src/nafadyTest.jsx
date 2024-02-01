import mostafaImg from "./assets/config.png"

function PrintData(props)
{
    return (
        <li>
            <      h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <p>{props.par}</p>
        
            <img src={props.img} alt="sasa" />
        </li>
        
    );
}


     function App2()
    {
        return (

            <div id="core-concepts">
                <h2 >test component props</h2>

            <ul >
                
               
                <PrintData 
                    
                    name="Mostafa"
                    age={35}
                    par="this is mostafa"
                    
                    img={mostafaImg}
              
                />
                
                <PrintData 
                    
                    name="Ahmed"
                                        age={45}

                    par="this is ahmed"
                    img={mostafaImg}
              
              />


            </ul>
</div>

        );
    }

export {App2 , PrintData} ;