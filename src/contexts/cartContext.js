import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCart(product) {
    console.log(product);
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = cart.products.some(
      (item) => item.item.id === product.id
    );
    if (isProductInCart) {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    // console.log(isProductInCart);
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cart);
    // console.log(product);
    getCart();
  }

  function checkProductInCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // console.log(cart);
    let isProductInCart = cart.products.some(
      (item) => item.item.id === product.id
    );
    return isProductInCart;
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.products.reduce(
      (prev, curr) => prev + curr.subPrice,
      0
    );
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  //  console.log(stxate.count);
  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        addProductToCart,
        checkProductInCart,
        getCart,
        changeProductCount,
        deleteFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
