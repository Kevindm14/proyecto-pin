import React from 'react';

const Card = ({ movies }) => (
	<div className="col-md-4">
		<div className="card border-primary bg-white text-dark my-3">
			<img src={movies.recipe.image} alt={movies.recipe.label} className="img-fluid" />
			<div className="card-body">
				<h4>{movies.recipe.label}</h4>
				{
					movies.recipe.healthLabels.map(e => {
						return <span className="badge mx-1 badge-success">{e}</span>
					})
				}
				<ol>
					{
						movies.recipe.ingredients.map(e => {
						return <li>{e.text}</li>
						})
					}
				</ol>

				<h5>Calorias de esta receta son: {Math.round(movies.recipe.calories)}</h5>
			</div>
		</div>
	</div>
)

export default Card;