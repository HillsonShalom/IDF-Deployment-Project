import React, { createContext, ReactNode, useState } from "react";

type DeploymentContextType = {
  units: { [key: string]: string };
  setUnitStatus: (unit: string, status: string) => void;
  setUnits: (units: { [key: string]: string }) => void
};

export const DeploymentContext = createContext<
  DeploymentContextType | undefined
>(undefined);

type ProviderProps = {
  children: ReactNode;
};

export const DeploymentProvider: React.FC<ProviderProps> = ({ children }) => {
  const [units, setUnits] = useState<{ [key: string]: string }>({ golani: "idle", givati: "idle", egoz: "idle", nachal: "idle", maglan: "idle", tzanchanim: "idle" });
  const setUnitStatus = (unit: string, status: string) => {
    setUnits({ ...units, [unit]: status });
  };
  return (
    <DeploymentContext.Provider value={{ units, setUnitStatus, setUnits }}>
      {children}
    </DeploymentContext.Provider>
  );
};
