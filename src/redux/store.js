import { createStore, applyMiddleware } from "redux";
import rootreducer from "./rootreducer";
import logger from "redux-logger";

const store = createStore(rootreducer, applyMiddleware(logger));

export default store;
