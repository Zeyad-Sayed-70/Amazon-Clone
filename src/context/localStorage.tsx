import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext } from "react";

interface LocalState {
  readonly localState: { quantity: number; product: Product }[];
  setLocalValue: (value: Product, quality: number) => void;
  deleteLocalValue: (id: number) => void;
  setLocalState: (id: any) => void;
}

export const LocalStateContext = createContext<LocalState>({
  localState: [],
  setLocalValue: () => {},
  deleteLocalValue: () => {},
  setLocalState: () => {},
});

export function LocalStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [localState, setLocalValue, deleteLocalValue, setLocalState] =
    useLocalStorage("cart_data");
  return (
    <>
      <LocalStateContext.Provider
        value={{
          localState,
          setLocalValue,
          deleteLocalValue,
          setLocalState,
        }}
      >
        {children}
      </LocalStateContext.Provider>
    </>
  );
}
