import { legacy_createStore as createStore, applyMiddleware } from "redux";
import  Reducer  from "../Reducer/Reducer";

let Store = createStore(Reducer, applyMiddleware) 


export default Store
 