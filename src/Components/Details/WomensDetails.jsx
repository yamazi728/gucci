import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../HomePage/HomePage.css";
import f5 from "../HomePage/img/products/f5.jpg";
import f6 from "../HomePage/img/products/f6.jpg";
import f7 from "../HomePage/img/products/f7.jpg";
import f8 from "../HomePage/img/products/f8.jpg";
import { Button, CardActionArea, IconButton, Rating } from "@mui/material";
import { authContext } from "../../contexts/authContext";

const WomensDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin } = useContext(authContext);
  const { getOneWomen, oneWomen, deleteWomen } = useContext(clothesContext);
  const [smallImg, setSmallImg] = useState([]);
  console.log(smallImg);
  const [mainImg, setMainImg] = useState("");
  useEffect(() => {
    getOneWomen(id);
  }, []);
  console.log(oneWomen);
  useEffect(() => {
    if (oneWomen) {
      setMainImg(oneWomen.image);
      setSmallImg([
        oneWomen.image,
        oneWomen.smallImg1,
        oneWomen.smallImg2,
        oneWomen.smallImg3,
      ]);
    }
  }, [oneWomen]);
  console.log(oneWomen);

  //   console.log(smallImg[1]);

  return (
    <div>
      {oneWomen ? (
        <div>
          <div id="prodetails" className="section-p1">
            <div className="single-pro-image">
              <img src={mainImg} width="100%" alt="" id="MainImg" />
              <div className="small-image-group">
                {smallImg.map((item) => (
                  <div
                    key={item}
                    className="small-img-col"
                    onClick={() => setMainImg(item)}
                  >
                    <img src={item} width="100%" alt="" className="small-img" />
                  </div>
                ))}
                {/* ))} */}
              </div>
            </div>
            <div className="single-pro-details">
              <h4>{oneWomen.title}</h4>
              <h2>${oneWomen.price}</h2>
              <div className="box">
                <select>
                  <option>Select Size</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </div>
              <h4>Products Details</h4>
              <span>{oneWomen.description}</span>
              <br />
              {admin ? (
                <div style={{ display: "grid", marginTop: "20px" }}>
                  <Button
                    onClick={() => {
                      deleteWomen(id);
                      navigate(`/womens`);
                    }}
                    style={{ marginBottom: "15px" }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/edit-for-womens/${id}`)}
                  >
                    Edit
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
          <section id="product1" className="section-p1">
            <h2>Recommendet For You</h2>
            <p>Summer Collection New Morden Design</p>
            <div className="pro-container">
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img src={f5} alt="" />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img src={f6} alt="" />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img src={f7} alt="" />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img src={f8} alt="" />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default WomensDetails;
