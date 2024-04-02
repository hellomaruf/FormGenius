import { createContext } from "react";

export const authContext = createContext(null);
function AuthProvider({ children }) {
  const name = "maruf";
  const age = 22;

  const authInfo = { name, age };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
}

export default AuthProvider;
