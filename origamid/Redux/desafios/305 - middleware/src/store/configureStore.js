import localStorage from "./middleware/localStorage";
import thunk from "./middleware/thunk";

const { applyMiddleware, compose, combineReducers } = Redux;
const reducer = combineReducers({});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const store = Redux.createStore(reducer, enhancer);

export default store;
