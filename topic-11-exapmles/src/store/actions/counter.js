import { SET_INCREMENT,SET_DECREMENT } from "../types/counter";

export const setIncrement = ()=>({
    type : SET_INCREMENT
});

export const setDecrement = ()=>({
    type : SET_DECREMENT
});