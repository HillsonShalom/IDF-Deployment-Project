import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

const MissionCompleted = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) throw new Error("problem!");
  const { units } = deploymentContext;
  const allComplete = Object.values(units).every(
    (status) => status === "Deployed"
  );
  return (
    <div>{allComplete && <h2>All units has completed successfully!</h2>}</div>
  );
};

export default MissionCompleted;
