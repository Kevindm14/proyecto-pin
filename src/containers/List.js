import React, { useState } from 'react';
import Card from '../components/Card/Card'
import Alert from './Alert'

function List() {
	const [searchT, setQuery] = useState("");
	const [data, setData] = useState([]);
	const [error, setAlert] = useState("");

	const APP_ID = "9282b8e8";
	const APP_KEY = "bd1cd80fa2031695ca90060be90be13b";

	const API = `https://api.edamam.com/search?q=${searchT}&app_id=${APP_ID}&app_key=${APP_KEY}`


	const getData = async () => {
		const url2 = await fetch(API)
		const data = await url2.json()

		setData(data.hits)

		if (!data.more) {
			return setAlert("No hay comidas con este nombre");
		  }
	};

	const onSubmit = e => {
		e.preventDefault()

		getData();

		setQuery('')
		setAlert('');
	};

	const handleChange = (e) => setQuery(e.target.value)
	
	return (
		<>
			<div className="row">
				<div className="col-md-4 offset-md-4 p-4">
					<form onSubmit={onSubmit}>
						{error !== "" && <Alert alert={error} />}
						<input 
							type="text" 
							className="form-control text-center"
							placeholder="Search"
							onChange={handleChange}
							value={searchT}
							autoFocus
						/>
						<input
							type="submit"
							className="form-control mt-2 btn btn-sm btn-success"
							value="Buscar"
						/>
					</form>
				</div>
			</div>
			<div className="row">
				{
					data.map((movies, i) => {
						return <Card movies={movies} key={i}/>
					})
				}
			</div>
		</>
		)
	}

export default List;