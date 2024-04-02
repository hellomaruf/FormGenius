import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase.config";

export const authContext = createContext(null);
function AuthProvider({ children }) {
  // Create user for register***********
  const createRegiterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in user with email and password***********
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Sign in with Google**********
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  // Sign in with Github***********
  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  const authInfo = {
    createRegiterUser,
    signInUser,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
}

export default AuthProvider;
