import React, { useEffect } from "react";
import AirportCard from "../components/AirportCard";
import AirportFilter from "../components/AirportFilter";
import AirportSearch from "../components/AirportSearch";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {fetchAirports} from '../store/actions/airportAction';
import ReactPaginate from 'react-paginate';

function MainPage () {

	const dispatch = useAppDispatch();
	const { airports, loading, error } = useAppSelector(state => state.airport);

	useEffect(() => {
		dispatch(fetchAirports())
	}, []);

	const pageCount = 10;
	const pageChangeHandler = (event: any) => {
		
	}

	return (
		<div className="container mx-auto max-w-[760px] pt-5">
			<AirportSearch />
			<AirportFilter />

			{
				loading && <p className="text-center text-lg">Loading...</p>
			}

			{
				error && <p className="text-center text-lg text-red-600">{error}</p>
			}

			{
				airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
			}

			<ReactPaginate
				breakLabel="..."
				nextLabel=" >"
				onPageChange={pageChangeHandler}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="< "
      	/>
			
		</div>
	)
}

export default MainPage;