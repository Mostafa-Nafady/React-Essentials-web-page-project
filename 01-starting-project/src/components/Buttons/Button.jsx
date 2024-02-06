export default function Button({children , onSelect,applyActiveStyle}) // isSelected to acivate the class active while the button is clicked
{
    // function clickHandler()
    // {
    //     console.log("click handler on ")
        
    //         return className = "active";
    
    // }
        // console.log(children)

    return (
        <li><button className={applyActiveStyle} onClick={onSelect}>{children }</button></li>


    );

    
}