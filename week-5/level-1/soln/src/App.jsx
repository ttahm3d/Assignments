import "./App.css";
import Card from "./components/Card";

function App() {
  const userDetails = {
    name: "Tahir Ahmed",
    designation: "Senior Associate - Fullstack developer",
    interests: ["Frontend Development", "Formula 1", "Chess"],
    links: [
      { text: "Linked In", url: "https://www.linkedin.com/in/tahirahmedt" },
      { text: "Github", url: "https://www.github.com/ttahm3d" },
    ],
  };

  return (
    <>
      <Card {...userDetails} />
    </>
  );
}

export default App;
