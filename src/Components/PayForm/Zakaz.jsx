import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Zakaz = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ height: "150vh" }}>
        <div
          style={{
            backgroundImage: "url(https://i.gifer.com/Q81V.gif)",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "120vh",
          }}
        >
          <Box
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box
              className="pay-respon"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "155px",
                height: "535px",
                backgroundColor: "white",
                width: "50%",
                borderRadius: "20px",
              }}
            >
              <Box
                style={{
                  marginTop: "55px",
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Your Name</Typography>
                <TextField
                  style={{ marginTop: "15px", marginBottom: "40px" }}
                  label="Name"
                  variant="standard"
                />
                <Typography variant="h5">Your Adress</Typography>

                <TextField
                  style={{ marginTop: "15px", marginBottom: "40px" }}
                  label="Adress"
                  variant="standard"
                />
                <Typography variant="h5">Your Phone</Typography>

                <TextField
                  style={{ marginTop: "15px" }}
                  label="Phone"
                  type="number"
                  placeholder="0(...)......"
                  variant="standard"
                />
                <Button
                  onClick={() => navigate(`/pay`)}
                  style={{ marginTop: "15px" }}
                  variant="contained"
                >
                  Go to buy
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Zakaz;
