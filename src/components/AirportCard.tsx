import React from "react";
import { useNavigate } from "react-router-dom";
import { IAirports } from "../models/models";
import classes from './AirportCard.module.css';

interface AirportCardProps {
	airport: IAirports
}


function AirportCard({ airport }: AirportCardProps) {

	const navigate = useNavigate();
	const clickHandler = () => navigate(`/airport/${airport.id}` )
	return (
		<div 
			className={classes.card} onClick={clickHandler}
			>
			<p className="text-lg font-bold">{airport.name}</p>
			<p>{airport?.email}</p>
			<p>{airport.body}</p>
		</div>
	)
}

export default AirportCard;