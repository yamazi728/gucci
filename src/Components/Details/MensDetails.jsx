import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartSharpIcon from "@mui/icons-material/RemoveShoppingCartSharp";
import "../HomePage/HomePage.css";
import f2 from "../HomePage/img/products/f2.jpg";
import f3 from "../HomePage/img/products/f3.jpg";
import f4 from "../HomePage/img/products/f4.jpg";
import f5 from "../HomePage/img/products/f5.jpg";

import { Button, CardActionArea, IconButton, Rating } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import Loading from "./Loading";
import { authContext } from "../../contexts/authContext";

const MensDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin } = useContext(authContext);
  const { getOneMen, oneMen, deleteMen } = useContext(clothesContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [checkProduct, setCheckProduct] = useState(false);
  const [smallImg, setSmallImg] = useState([]);
  const [mainImg, setMainImg] = useState("");
  useEffect(() => {
    getOneMen(id);
  }, []);
  // console.log(oneMen);
  useEffect(() => {
    if (oneMen) {
      setCheckProduct(checkProductInCart(oneMen));
      setMainImg(oneMen.image);
      setSmallImg([
        oneMen.image,
        oneMen.smallImg1,
        oneMen.smallImg2,
        oneMen.smallImg3,
      ]);
    }
  }, [oneMen]);
  // console.log(oneMen);

  //   console.log(smallImg[1]);

  return (
    <div>
      {oneMen ? (
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
              <h4>{oneMen.title}</h4>
              <h2>${oneMen.price}</h2>
              <div className="box">
                <select>
                  <option>Select Size</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <IconButton
                  onClick={() => {
                    addProductToCart(oneMen);
                    setCheckProduct(checkProductInCart(oneMen));
                  }}
                >
                  {checkProduct ? (
                    <RemoveShoppingCartSharpIcon />
                  ) : (
                    <ShoppingCartIcon />
                  )}
                </IconButton>
              </div>
              <h4>Products Details</h4>
              <span>{oneMen.description}</span>
              <br />

              {admin ? (
                <div style={{ display: "grid", marginTop: "20px" }}>
                  <Button
                    onClick={() => {
                      deleteMen(id);
                      navigate(`/mens`);
                    }}
                    style={{ marginBottom: "15px" }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/edit-for-men/${id}`)}
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
                  <img src={f2} alt="" />
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
                  <img src={f3} alt="" />
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
                  <img src={f4} alt="" />
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
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MensDetails;
