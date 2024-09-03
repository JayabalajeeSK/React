import reactImg from "../../assets/react-core-concepts.png"; //.. one path up
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
    return (
      <header>
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> image may get lost*/}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for
          almost any app you are going to build! {/*generate random values*/}
        </p>
      </header>
    );
  }