import React, { useReducer } from "react";

export const favoriteContextWomen = React.createContext();

const INIT_STATE = {
  favoriteWomen: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITE_WOMEN":
      return {
        ...state,
        favoriteWomen: action.payload,
      };
    default:
      return state;
  }
}

const WomenFavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToWomenFavorite(product) {
    let favoriteWomen = JSON.parse(localStorage.getItem("favoriteWomen"));
    if (!favoriteWomen) {
      favoriteWomen = {
        womenFavorites: [],
      };
    }
    let newProduct = {
      item: product,
    };
    let isProductInWomenFavorite = favoriteWomen.womenFavorites.some(
      (item) => item.item.id === product.id
    );
    if (isProductInWomenFavorite) {
      favoriteWomen.womenFavorites = favoriteWomen.womenFavorites.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      favoriteWomen.womenFavorites.push(newProduct);
    }
    // console.log(isProductInWomenFavorite);
    localStorage.setItem("favoriteWomen", JSON.stringify(favoriteWomen));
    // console.log(favoriteWomen);
    // console.log(product);
    getWomenFavorite();
  }

  function checkProductInWomenFavorite(product) {
    let favoriteWomen = JSON.parse(localStorage.getItem("favoriteWomen"));
    if (!favoriteWomen) {
      favoriteWomen = {
        womenFavorites: [],
      };
      localStorage.setItem("favoriteWomen", JSON.stringify(favoriteWomen));
    }
    // console.log(favoriteWomen);
    let isProductInWomenFavorite = favoriteWomen.womenFavorites.some(
      (item) => item.item.id === product.id
    );
    return isProductInWomenFavorite;
  }

  function getWomenFavorite() {
    let favoriteWomen = JSON.parse(localStorage.getItem("favoriteWomen"));
    if (!favoriteWomen) {
      favoriteWomen = {
        womenFavorites: [],
      };
    }
    dispatch({
      type: "GET_FAVORITE_WOMEN",
      payload: favoriteWomen,
    });
    // console.log(favoriteWomen);
  }

  function deleteFromWomenFavorite(id) {
    let favoriteWomen = JSON.parse(localStorage.getItem("favoriteWomen"));
    favoriteWomen.womenFavorites = favoriteWomen.womenFavorites.filter(
      (item) => item.item.id !== id
    );
    localStorage.setItem("favoriteWomen", JSON.stringify(favoriteWomen));
    getWomenFavorite();
  }

  return (
    <favoriteContextWomen.Provider
      value={{
        favoriteWomen: state.favoriteWomen,
        addProductToWomenFavorite,
        checkProductInWomenFavorite,
        getWomenFavorite,
        deleteFromWomenFavorite,
      }}
    >
      {children}
    </favoriteContextWomen.Provider>
  );
};
export default WomenFavoriteContextProvider;
