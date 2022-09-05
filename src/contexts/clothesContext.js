import React, { createContext, useReducer } from "react";
import axios from "axios";
import { Action } from "history";

export const clothesContext = createContext();

const API = "http://localhost:8000/mens";
const API2 = "http://localhost:8000/womens";

const INIT_STATE = {
  mens: [],
  womens: [],
  oneMen: null,
  oneWomen: null,
  mensPages: 0,
  womensPages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MENS":
      return {
        ...state,
        mens: action.payload.data,
        mensPages: Math.ceil(action.payload.headers["x-total-count"] / 5),
      };
    case "GET_ONE_MEN":
      return {
        ...state,
        oneMen: action.payload,
      };
    case "GET_WOMENS":
      return {
        ...state,
        womens: action.payload.data,
        womensPages: Math.ceil(action.payload.headers["x-total-count"] / 5),
      };
    case "GET_ONE_WOMEN":
      return {
        ...state,
        oneWomen: action.payload,
      };
    default:
      return state;
  }
}

const ClothesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //   Для отправки в db
  async function createMens(newMens) {
    await axios.post(API, newMens);
  }
  async function createWomens(newWomens) {
    await axios.post(API2, newWomens);
  }

  //   Для получения
  async function getMens() {
    let res = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_MENS",
      payload: res,
    });
  }
  async function getWomens() {
    let res = await axios(`${API2}/${window.location.search}`);
    dispatch({
      type: "GET_WOMENS",
      payload: res,
    });
  }

  //   Для получения одной одежды
  async function getOneMen(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MEN",
      payload: res.data,
    });
  }
  async function getOneWomen(id) {
    let res = await axios(`${API2}/${id}`);
    dispatch({
      type: "GET_ONE_WOMEN",
      payload: res.data,
    });
  }

  //   Для удаления
  async function deleteMen(id) {
    await axios.delete(`${API}/${id}`);
    getMens();
  }
  async function deleteWomen(id) {
    await axios.delete(`${API2}/${id}`);
    getWomens();
  }

  //   Для редактирования
  async function editMen(id, editedMen) {
    await axios.patch(`${API}/${id}`, editedMen);
  }
  async function editWomen(id, editedWomen) {
    await axios.patch(`${API2}/${id}`, editedWomen);
  }

  return (
    <clothesContext.Provider
      value={{
        mens: state.mens,
        oneMen: state.oneMen,
        womens: state.womens,
        oneWomen: state.oneWomen,
        mensPages: state.mensPages,
        womensPages: state.womensPages,
        createMens,
        getMens,
        getOneMen,
        deleteMen,
        editMen,
        createWomens,
        getWomens,
        getOneWomen,
        deleteWomen,
        editWomen,
      }}
    >
      {children}
    </clothesContext.Provider>
  );
};

export default ClothesContextProvider;
