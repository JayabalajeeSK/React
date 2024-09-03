export default function Tabs({children, buttons, ButtonsContainer='menu'}) {
    //const ButtonsContainer = buttonsContainer; - using props with upper case character
    return <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
    </>
}
//slot - for more props in JSX