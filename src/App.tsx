import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AirportDetailsPage from './components/pages/AirportDetailsPage';
import AuthPage from './components/pages/AuthPage';
import MainPage from './components/pages/MainPage';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
	<>
		<Navigation />
	 	<Routes>
			<Route path='/' element={ <MainPage /> } />
			<Route path='/auth' element={ <AuthPage /> } />
			<Route path='/airport' element={ <AirportDetailsPage /> } />
		</Routes>
	</>

    
  );
}

export default App;
