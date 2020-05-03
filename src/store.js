// react libraries
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// third-party libraries
import { composeWithDevTools } from "redux-devtools-extension";

// reducers here..
import rootReducers from "./reducers";

// initialize store here..
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
