import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { grey, yellow } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const pop = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/success");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Button
      onClick={() => {
        pop();
      }}
      variant="contained"
      style={{
        marginTop: "10px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      Sign In with &nbsp;
      <GoogleIcon style={{ color: "#de3b2b" }} /> oogle
    </Button>
  );
};

export default GoogleAuth;
