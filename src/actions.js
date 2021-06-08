import { ADD, REMOVE } from './actionTypes.js';

export const addProduct = (id, name) => ({ type: ADD, id, name });
export const removeProduct = id => ({ type: REMOVE, id });
