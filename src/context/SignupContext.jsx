import { createContext, useContext, useState } from "react";

const SignupContext = createContext();

//eslint-disable-next-line
function SignupProvider({ children }) {
  const [userDetails, setUserDetails] = useState();

  function UpdateUserDetails(user) {
    setUserDetails(user);
  }
  return (
    <SignupContext.Provider value={{ userDetails, UpdateUserDetails }}>
      {children}
    </SignupContext.Provider>
  );
}

function useSignup() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("SignupContext is used outside SignupContext Provider");
  }
  return context;
}
//eslint-disable-next-line
export { useSignup, SignupProvider };
