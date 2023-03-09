//import { createStore } from "redux";
import { movieReducer } from "../reducer/movieReducer";
import { legacy_createStore as createStore } from 'redux'




const store = createStore(movieReducer);

export default store;