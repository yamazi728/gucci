import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { commentsContext } from "../../contexts/commentsContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SendIcon from "@mui/icons-material/Send";

import CommentCard from "./CommentCard";
import "./AboutUs.css";
import { authContext } from "../../contexts/authContext";
import { Parallax } from "react-parallax";

const AboutUs = () => {
  const [position, setPosition] = useState("fixed");
  const listenScrollEvent = () => {
    window.scrollY > 320 ? setPosition("inherit") : setPosition("fixed");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const { user } = useContext(authContext);
  //   console.log(user);
  const {
    createComments,
    getComments,
    comments,
    commentsPages,
    editComments,
    deleteComments,
  } = useContext(commentsContext);
  //   console.log(comments);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("male");
  const [userComment, setUserComment] = useState("");
  function handleSave() {
    let newComment = {
      name,
      time,
      userComment,
      gender,
    };
    if (!name.trim() || !time.trim() || !userComment.trim()) {
      alert("Fill to the filds");
      return;
    }
    createComments(newComment);
    getComments();
    // console.log(newComment);
  }
  useEffect(() => {
    getComments();
  }, [comments]);

  const [value, setValue] = React.useState("female");
  //   console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Parallax
        bgImage="https://images5.alphacoders.com/106/1069669.jpg"
        strength={-700}
      >
        <section id="page-header3">
          <h2 style={{ position: position }}>YOUR IMPRESSIONS</h2>
        </section>
      </Parallax>
      <div
        className="comments"
        style={{
          marginTop: "150px",
        }}
      >
        <div className="comments-box">
          <div className="comments-inputs">
            <Typography variant="h4" className="text-h3">
              Add Comment
            </Typography>

            <div className="comments-inputs2">
              <TextField
                className="text-field"
                label="Your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="comments-inputs2">
              <TextField
                className="text-field"
                label="year/month/day"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="comments-inputs2">
              <TextField
                className="text-field"
                label="your text"
                type="text"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                variant="outlined"
              />
            </div>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Your Gender
              </FormLabel>
              <RadioGroup
                style={{ display: "flex", flexDirection: "row" }}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                value2={gender}
                onChange={(e) => {
                  handleChange(e);
                  setGender(value);
                }}
              >
                <FormControlLabel
                  style={{ width: "120px" }}
                  value="female"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  style={{ width: "120px" }}
                  value="male"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              onClick={handleSave}
            >
              <SendIcon />
            </Button>
          </div>
        </div>

        <div className="user-comments">
          {comments.map((item) => (
            <CommentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
