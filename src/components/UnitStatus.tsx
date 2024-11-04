import { useContext } from "react"
import { DeploymentContext } from "../context/DeploymentContext"

interface Props {
    unitName: string
}

const UnitStatus = ({unitName}: Props) => {
    const deploymentContext = useContext(DeploymentContext)
    if (!deploymentContext) throw new Error("problem!");
    const {units} = deploymentContext
  return (
    <div>
        <p>{unitName}: {units[unitName]}</p>
    </div>
  )
}

export default UnitStatus