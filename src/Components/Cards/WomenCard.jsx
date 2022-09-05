import React, { useContext, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import RemoveShoppingCartSharpIcon from "@mui/icons-material/RemoveShoppingCartSharp";

import BookmarkRemoveSharpIcon from "@mui/icons-material/BookmarkRemoveSharp";
import "./Cards.css";
import { CardActionArea, IconButton, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { favoriteContextWomen } from "../../contexts/favoriteContextWomen";

export default function WomenCard({ item }) {
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  const { addProductToWomenFavorite, checkProductInWomenFavorite } =
    useContext(favoriteContextWomen);
  const [checkWomenFavorite, setCheckWomenFavorite] = useState(
    checkProductInWomenFavorite(item)
  );
  return (
    <div id="product" className="section-p">
      <div className="pro-container">
        <div className="pro">
          <CardActionArea style={{ borderRadius: "25px" }}>
            <CardMedia
              onClick={() => navigate(`/womens/${item.id}`)}
              component="img"
              src={item.image}
              alt=""
            />
          </CardActionArea>
          <div className="des">
            <span className="sp">{item.subtitle}</span>
            <h5 onClick={() => navigate(`/womens/${item.id}`)}>{item.title}</h5>
            <div>
              <Rating name="size-medium" defaultValue={1} />
            </div>
            <h4>{item.price}$</h4>
          </div>
          <IconButton
            onClick={() => {
              addProductToCart(item);
              setCheckProduct(checkProductInCart(item));
            }}
            className="cart"
          >
            {checkProduct ? (
              <RemoveShoppingCartSharpIcon />
            ) : (
              <ShoppingCartIcon />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              addProductToWomenFavorite(item);
              setCheckWomenFavorite(checkProductInWomenFavorite(item));
            }}
            className="cart"
            style={{ marginRight: "35px" }}
          >
            {checkWomenFavorite ? (
              <BookmarkRemoveSharpIcon />
            ) : (
              <BookmarkAddSharpIcon />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
