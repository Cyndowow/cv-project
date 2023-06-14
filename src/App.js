import Educational from "./components/Educational";
import Experience from "./components/Experience";
import General from "./components/General";
import Intro from "./components/Intro";
import Skills from "./components/Skills"
import "./styles.css"


function App() {
  return (
    <div className="App">
      <Intro />
      <General />
      <Skills />
      <Educational />
      <Experience />
    </div>
  );
}

export default App;
