import "./App.css";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import Clock from './components/Clock'
import CompUpdate from './components/CompUpdate'
import CompWillUnMount from './components/CompWillUnMount'

function App() {
  return <div className="App">
    <CompWillUnMount/>
  </div>
}

export default App;
