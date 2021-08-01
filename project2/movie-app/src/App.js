import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Access from "./components/Access/Access"

import './App.css';

function App() {
	return (
		<div>
			<BrowserRouter>

				<Navbar />

				<Route path="/" exact component={Home} />
				<Route path="/Movie/:movieId" component={MovieInfo} />
				<Route path="/Actor/:movieId/:actorId" component={Access} />
			
			</BrowserRouter>

			{/* <Home /> */}
			{/* <MovieInfo /> */}
		</div>
	);
}

export default App;
