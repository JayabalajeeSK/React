export default function TabButton({label, isSelected, ...props}) { //on - making clear this prop should be set to a function
    return( 
    <li>
        <button className={isSelected ? "active":undefined } {...props}>{label}</button>
    </li>
    );
}