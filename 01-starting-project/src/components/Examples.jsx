import  {useState } from 'react';
import {EXAMPLES} from "../data";
import TabButton from "./TabButton"
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function HandleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
}
let tabContent = <p>Please select a topic.</p>;
if(selectedTopic){
  tabContent=(
  <div id="tab=conetent">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>
  );
}
    return (
        <Section title="Examples" id="examples">
            <Tabs 
            // ButtonsContainer="menu"
            buttons={
            <>
            <TabButton  label = "Components" onClick={()=>HandleSelect('components')} isSelected={selectedTopic === "components"}/>
            <TabButton label = "JSX" onClick={()=>HandleSelect('jsx')} isSelected={selectedTopic === "jsx"} />
            <TabButton label = "Props" onClick={()=>HandleSelect('props')} isSelected={selectedTopic === "props"} />
            <TabButton label = "State" onClick={()=>HandleSelect('state')} isSelected={selectedTopic === "state"} />
            </>
        }>
        {tabContent}</Tabs>
        </Section>
    );
}
//onClick - bcoz we using the props from react, so we not need that custom onSelect