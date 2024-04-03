import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const authContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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
  // Set observer********
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // logged out **********
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    createRegiterUser,
    signInUser,
    signInWithGoogle,
    signInWithGithub,
    user,
    logOut
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
}

export default AuthProvider;
