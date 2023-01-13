import { useState } from "react";
import { FormInputContext } from "../store/formInputContext";

export function FormInputProvider({ children }: { children: React.ReactNode }) {
  const [repair, setRepair] = useState(0);
  const [silver, setSilver] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");

  return (
    <FormInputContext.Provider
      value={{
        repair,
        setRepair,
        silver,
        setSilver,
        total,
        setTotal,
        name,
        setName,
      }}
    >
      {children}
    </FormInputContext.Provider>
  );
}
