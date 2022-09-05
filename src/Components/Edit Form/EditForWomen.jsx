import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";

const EditForWomen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneWomen, oneWomen, editWomen } = useContext(clothesContext);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [smallImg1, setSmallImg1] = useState("");
  const [smallImg2, setSmallImg2] = useState("");
  const [smallImg3, setSmallImg3] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    let editedWomen = {
      title,
      subtitle,
      description,
      price,
      image,
      smallImg1,
      smallImg2,
      smallImg3,
    };
    if (!title.trim() || !description.trim() || !price) {
      alert("Fill to the filds");
      return;
    }
    editWomen(id, editedWomen);
    navigate(`/womens`);
  }
  useEffect(() => {
    getOneWomen(id);
  }, []);
  useEffect(() => {
    if (oneWomen) {
      setTitle(oneWomen.title);
      setSubtitle(oneWomen.subtitle);
      setImage(oneWomen.image);
      setSmallImg1(oneWomen.smallImg1);
      setSmallImg2(oneWomen.smallImg2);
      setSmallImg3(oneWomen.smallImg3);
      setDescription(oneWomen.description);
      setPrice(oneWomen.price);
    }
  }, [oneWomen]);

  return (
    <div style={{ marginTop: "200px", height: "100vh" }}>
      <Container maxWidth="sm">
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Edit form</Typography>
          <TextField
            style={{ marginTop: "15px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            label="Subtitle"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="For Image"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={smallImg1}
            onChange={(e) => setSmallImg1(e.target.value)}
            label="For small image 1"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={smallImg2}
            onChange={(e) => setSmallImg2(e.target.value)}
            label="For small image 2"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={smallImg3}
            onChange={(e) => setSmallImg3(e.target.value)}
            label="For small image 3"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            variant="outlined"
          />
          <Button
            onClick={handleSave}
            style={{ marginTop: "15px" }}
            variant="contained"
          >
            Edit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default EditForWomen;
