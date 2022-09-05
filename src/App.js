import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./Components/headerMk/Header";
import BackDrop from "./Components/headerMk/BackDrop";
import Sidebar from "./Components/headerMk/Sidebar";
import { Container } from "@mui/material";
import "./App.css";
import HeaderContextProvider from "./contexts/headerContext";
import ClothesContextProvider from "./contexts/clothesContext";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider, { cartContext } from "./contexts/cartContext";
import SpeedDialMen from "./Components/SpeedDial/SpeedDial";
import CommentsContextProvider from "./contexts/commentsContext";
import Footer from "./Components/Footer/Footer";
import FavoriteContextProvider from "./contexts/favoriteContext";
import WomenFavoriteContextProvider from "./contexts/favoriteContextWomen";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <WomenFavoriteContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <CommentsContextProvider>
                <ClothesContextProvider>
                  <HeaderContextProvider>
                    <Container
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexFlow: "wrap",
                      }}
                    >
                      <Header />
                    </Container>
                    <Sidebar />
                    <BackDrop />
                    <Routing />
                    <Footer />
                  </HeaderContextProvider>
                </ClothesContextProvider>
              </CommentsContextProvider>
            </CartContextProvider>
          </FavoriteContextProvider>
        </WomenFavoriteContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
