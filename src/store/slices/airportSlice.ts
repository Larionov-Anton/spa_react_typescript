import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAirports } from "../../models/models"

interface AirportState {
	loading: boolean
	error: string
	airports: IAirports[]
}

const initialState: AirportState = {
	loading: false,
	error: '',
	airports: []
}

export const airportSlice = createSlice({
	name: 'airport',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true;
		},
		fetchSuccess(state, action: PayloadAction<IAirports[]>) {
			state.loading = false;
			state.airports = action.payload;
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false;
			state.error = action.payload.message;
		}
	}
})

console.log(airportSlice)

export default airportSlice.reducer;