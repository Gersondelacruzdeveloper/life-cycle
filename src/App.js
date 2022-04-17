import "./App.css";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import Clock from './components/Clock'
import CompUpdate from './components/CompUpdate'
import CompWillUnMount from './components/CompWillUnMount'
import CompWillUnMountReplaceParent from './components/CompWillUnMountReplaceParent'

function App() {
  return <div className="App">
    {/* <CompWillUnMount/> */}

    <CompWillUnMountReplaceParent/>
  </div>
}

export default App;
