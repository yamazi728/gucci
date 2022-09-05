import { Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React, { useContext } from "react";
import { commentsContext } from "../../contexts/commentsContext";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CommentCard = ({ item }) => {
  //   console.log(item);

  return (
    <div
      style={{
        backgroundColor: "#f8f7fc",
        marginBottom: "50px",
        padding: "20px 20px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Avatar
          alt="Remy Sharp"
          src={
            item.gender === "male"
              ? "https://cdn-icons-png.flaticon.com/512/206/206853.png"
              : "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.png   "
          }
        />
      </div>
      <div style={{ width: "80%", padding: "0 15px 0px" }}>
        <h3>@{item.name}</h3>
        <p style={{ marginTop: "8px", marginBottom: "25px", fontSize: "13px" }}>
          Commented by user. {item.time}
        </p>
        <h5 style={{ marginBottom: "15px" }}>{item.userComment}</h5>
      </div>
      <div style={{ display: "flex", alignItems: "center", height: "20px" }}>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
      </div>
    </div>
  );
};

export default CommentCard;
