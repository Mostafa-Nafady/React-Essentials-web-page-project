export default function Button({children , onSelect})
{
    // function clickHandler()
    // {
    //     console.log("click handler on ")
        
    //         return className = "active";
    
    // }
        // console.log(children)

    return (
        <li><button onClick={onSelect}>{children }</button></li>


    );

    
}