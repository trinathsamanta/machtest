import {createStore} from "redux";
import {reducer} from "./Reducers/reducer";

export const Store = createStore(reducer);

Store.subscribe(function(){
 
})