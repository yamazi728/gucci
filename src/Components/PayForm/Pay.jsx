import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Pay = () => {
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
                <Typography variant="h5">Cardholder Name</Typography>
                <TextField
                  style={{ marginTop: "15px", marginBottom: "40px" }}
                  label="Name"
                  variant="standard"
                />
                <Typography variant="h5">Card Number</Typography>

                <TextField
                  style={{ marginTop: "15px", marginBottom: "40px" }}
                  label="Adress"
                  variant="standard"
                />
                <Box
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <TextField
                    style={{ marginTop: "15px" }}
                    label="MOUNTH"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    style={{ marginTop: "15px" }}
                    label="YEAR"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    style={{ marginTop: "15px" }}
                    label="CVV"
                    type="number"
                    variant="standard"
                  />
                </Box>

                <Button
                  onClick={() => navigate(`/success`)}
                  style={{ marginTop: "15px" }}
                  variant="contained"
                >
                  Pay
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pay;
