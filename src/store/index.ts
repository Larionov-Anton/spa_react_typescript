import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from './slices/airportSlice';

const rootReducer = combineReducers({
 airport: airportReducer
})

export function setUpStore() {
	return configureStore({
		reducer: rootReducer
	})
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];

console.log()