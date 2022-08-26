import {Link} from 'react-router-dom';
import React from "react";

function Navigation() {
	return (
		<nav className='flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md ' >
			<Link to='/'>Main</Link>
			<Link to='/airport'>Airport</Link>
			<Link to='/auth'>Auth</Link>
		</nav>

	)
}

export default Navigation;