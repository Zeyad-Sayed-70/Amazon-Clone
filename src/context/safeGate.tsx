import useAuthentication from "@/hooks/useAuthentication";
import React from "react";

interface SafeGate {
  isLoggined: boolean;
  userData: UserData | null;
}

const SafeGate = {
  isLoggined: false,
  userData: null,
};

export const SafeGateContext = React.createContext<SafeGate>(SafeGate);

export default function SafeGateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, userData } = useAuthentication();
  return (
    <SafeGateContext.Provider value={{ isLoggined: isAuthenticated, userData }}>
      {children}
    </SafeGateContext.Provider>
  );
}
