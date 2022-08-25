import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AirportDetailsPage from './pages/AirportDetailsPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

function App() {
  return (
	<Routes>
		<Route path='/' element={ <MainPage /> } />
		<Route path='/auth' element={ <AuthPage /> } />
		<Route path='/airport' element={ <AirportDetailsPage /> } />
	</Routes>
    
  );
}

export default App;
