import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./component/Counter";
import reducer from "./store/combineReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });
ReactDOM.render(
  <Provider store={store}>
    <Counter
      onIncrement={() => action("INCREMENT_ASYNC")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action("INCREMENT_AFTER_THREE_SECONDS")}
      onReset={() => action("RESET")}
    />
  </Provider>,

  document.getElementById("root")
);
