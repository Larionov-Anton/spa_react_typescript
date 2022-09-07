import {Dispatch} from '@reduxjs/toolkit'
import { AppDispatch } from '../index'
import axios from '../../axios/axios'
import { IAirports } from '../../models/models'
import {airportSlice} from '../slices/airportSlice'

export const fetchAirports = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(airportSlice.actions.fetching())
			const response =  await axios.get<IAirports[]>('comments?_limit=10')
			dispatch(airportSlice.actions.fetchSuccess(response.data))
		} catch (e) {
			dispatch(airportSlice.actions.fetchError(e as Error))
		}
	}
}