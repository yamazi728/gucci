import React, { createContext, useReducer } from "react";
import axios from "axios";
import { Action } from "history";

export const commentsContext = createContext();

const API = "http://localhost:8000/comments";

const INIT_STATE = {
  comments: [],
  likes: {},
  commentsPages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload.data,
        commentsPages: Math.ceil(action.payload.headers["x-total-count"] / 5),
      };
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //   Для отправки в db
  async function createComments(newComment) {
    await axios.post(API, newComment);
  }

  //   Для получения
  async function getComments() {
    let res = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_COMMENTS",
      payload: res,
    });
  }

  //   Для удаления
  async function deleteComment(id) {
    await axios.delete(`${API}/${id}`);
    getComments();
  }

  //   Для редактирования
  async function editComments(id, editedComment) {
    await axios.patch(`${API}/${id}`, editedComment);
  }
  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        commentsPages: state.commentsPages,
        createComments,
        getComments,
        deleteComment,
        editComments,
      }}
    >
      {children}
    </commentsContext.Provider>
  );
};

export default CommentsContextProvider;
