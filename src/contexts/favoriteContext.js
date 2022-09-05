import React, { useReducer } from "react";

export const favoriteContext = React.createContext();

const INIT_STATE = {
  favorite: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITE":
      return {
        ...state,
        favorite: action.payload,
      };
    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        favorites: [],
      };
    }
    let newProduct = {
      item: product,
    };
    let isProductInFavorite = favorite.favorites.some(
      (item) => item.item.id === product.id
    );
    if (isProductInFavorite) {
      favorite.favorites = favorite.favorites.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      favorite.favorites.push(newProduct);
    }
    // console.log(isProductInFavorite);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    // console.log(favorite);
    // console.log(product);
    getFavorite();
  }

  function checkProductInFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        favorites: [],
      };
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    // console.log(favorite);
    let isProductInFavorite = favorite.favorites.some(
      (item) => item.item.id === product.id
    );
    return isProductInFavorite;
  }

  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        favorites: [],
      };
    }
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }
  //  console.log(stxate.count);

  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.favorites = favorite.favorites.filter(
      (item) => item.item.id !== id
    );
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        count: state.count,
        addProductToFavorite,
        checkProductInFavorite,
        getFavorite,
        deleteFromFavorite,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
