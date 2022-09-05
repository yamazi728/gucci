import React, { createContext, useState, useEffect } from "react";
import fire from "../fire";
import "firebase/firestore";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  // для регистрации
  function signUp(email, password, navigate) {
    console.log(email, password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/signup-success"))
      .catch((error) => setError(error.message));
  }

  // для входа
  function signIn(email, password, navigate) {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/mens"))
      .catch((error) => setError(error.message));
  }

  //   function signInWithGoogle() {
  //     signInWithPopup(auth, provider)
  //       .then((res) => {
  //         const name = res.user.displayName;
  //         const email = res.user.email;
  //         const photo = res.user.photoUrl;
  //         localStorage.setItem("name", name);
  //         localStorage.setItem("email", email);
  //         localStorage.setItem("photo", photo);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  // для выхода
  function logOut() {
    fire.auth().signOut();
  }

  // для проверки админа
  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.email === "admin@gmail.com") {
          setAdmin(true);
        }
        setUser(user);
      } else {
        setUser("");
        setAdmin(false);
      }
    });
  }
  useEffect(authListener, []);

  return (
    <authContext.Provider
      value={{ user, error, admin, signIn, signUp, logOut }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
