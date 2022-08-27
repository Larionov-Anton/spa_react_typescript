import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { error } from "console"
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
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction) {

		},
		fetchError(state, action: PayloadAction) {
			
		}
	}
})