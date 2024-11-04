import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

interface Props {
    unitName: string
}

const ChangeStatus = ({unitName}: Props) => {
    const deploymentContext = useContext(DeploymentContext)
    if (!deploymentContext) throw new Error("problem!");
    const {setUnitStatus} = deploymentContext
  return (
    <button onClick={() => setUnitStatus(unitName, "Deployed")}>ChangeStatus</button>
  )
}

export default ChangeStatus