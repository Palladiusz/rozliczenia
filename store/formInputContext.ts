import { createContext } from "react";

interface FormInputContext {
  repair: number;
  setRepair: React.Dispatch<React.SetStateAction<number>>;
  silver: number;
  setSilver: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const FormInputContext = createContext<FormInputContext>({
  repair: 0,
  setRepair: () => {},
  silver: 0,
  setSilver: () => {},
  total: 0,
  setTotal: () => {},
  name: "",
  setName: () => {},
});
