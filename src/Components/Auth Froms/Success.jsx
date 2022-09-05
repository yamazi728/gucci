import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "200px",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <img
          style={{ width: "600px" }}
          src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
          alt=""
        />{" "}
      </div>
      <div style={{ textAlign: "center" }}>
        <h5 style={{ fontSize: "50px", marginBottom: "30px" }}>SUCCESS</h5>
        <h2 style={{ marginBottom: "15px" }}>
          Congratulations, your account has been successfully created.
        </h2>
        <Button
          onClick={() => navigate(`/`)}
          variant="contained"
          color="success"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Success;
