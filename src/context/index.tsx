import React, { useState, useMemo, useEffect } from "react";
import * as Context from "./contexts";
import jwtDecode from "jwt-decode";

export const AppContext: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [authContext, setAuthContext] = useState<any>({
    user: null,
    remember: null,
  });

  const authContextValue = useMemo(
    () => ({ authContext, setAuthContext }),
    [authContext]
  );

  useEffect(() => {
    if (localStorage.token) {
      setAuthContext((prev: any) => ({
        ...prev,
        user: jwtDecode(localStorage.token),
      }));
    }
    if (localStorage.remember) {
      setAuthContext((prev: any) => ({
        ...prev,
        remember: localStorage.remember,
      }));
    }
  }, [typeof window !== "undefined" ? window.localStorage.token : false]);

  return (
    <Context.Auth.Provider value={authContextValue}>
      {children ? children : ""}
    </Context.Auth.Provider>
  );
};
