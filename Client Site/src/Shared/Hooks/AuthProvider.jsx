import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";

// import { useNavigate } from "react-router";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   console.log(user);

  const createUser = (Email, password) => {
    return createUserWithEmailAndPassword(auth, Email, password);
  };

  const SignInUser = (Email, password) => {
    return signInWithEmailAndPassword(auth, Email, password);
  };

  const SignOutUser = () => {
    return signOut(auth);
    };

  const provider_google = new GoogleAuthProvider();
  const provider_facebook = new FacebookAuthProvider();
  

    
  const SignInGoogle = () => {
      return signInWithPopup(auth, provider_google);
  }
  const SignInFacebook = () => {
      return signInWithPopup(auth, provider_facebook);
  }
  
  // const navigate = useNavigate()
  const [data, setData] = useState([]);
  const showdetails = () => {
    // navigate("/about");
    return data;
    
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    setData,
    createUser,
      SignInUser,
      SignOutUser,
    SignInGoogle,
    showdetails,
    SignInFacebook,
    data,
    loading
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;