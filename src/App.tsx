
import './App.css'
import MissionCompleted from './components/MissionCompleted'
import UnitList from './components/UnitList'
import { DeploymentProvider } from './context/DeploymentContext'

function App() {

  return (
    <>
    <DeploymentProvider>
      <div>
        <h1>IDF Deployment</h1>
        <UnitList/>
        <MissionCompleted/>
      </div>
    </DeploymentProvider>
    </>
  )
}

export default App
