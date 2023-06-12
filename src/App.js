import Educational from "./components/Educational";
import Experience from "./components/Experience";
import General from "./components/General";


function App() {
  return (
    <div className="App">
      <General name="dummy" email="dummy" phone="1234"/>
      <Educational />
      <Experience />
    </div>
  );
}

export default App;
