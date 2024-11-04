import { useContext } from "react";
import ChangeStatus from "./ChangeStatus";
import UnitStatus from "./UnitStatus";
import { DeploymentContext } from "../context/DeploymentContext";

const UnitList = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) throw new Error("problem!");
  const { units, setUnits } = deploymentContext;
  return (
    <div>
      <h2>Units List</h2>
      {Object.keys(units).map((u) => (
        <>
          <div>
            <UnitStatus unitName={u} />
            <ChangeStatus unitName={u} />
          </div>
        </>
      ))}
      <button
        onClick={() => {
          const dict: { [key: string]: string } = {};
          Object.keys(units).map((k) => (dict[k] = "idle"));
          setUnits(dict);
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default UnitList;
