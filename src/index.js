import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//så att vi kan passa ner data till connectors.
import { createStore, applyMiddleware } from "redux";
//importerar store och middleware så vi kan använda thunk
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

export const store = createStore(reducers, applyMiddleware(thunk));
//vi sparar en store med reducers och applicerar middlewares i storen. Vi hämtar reducers från mappen reducers
//reducer kallas en gång varje gång vi startar applikationen
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// PROVIDER, createStore - applyMiddleware,
