import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})

export function setUpStore() {
	return configureStore({
		reducer: rootReducer
	})
};