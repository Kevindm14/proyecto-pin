import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List'
import 'bootswatch/dist/darkly/bootstrap.min.css';
import Login from './containers/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './containers/Home'

const App = () => {
	return (
		<Router>
			<nav className="navbar navbar-dark bg-dark border-bottom border-white">
				<Link to="/">
					<li className="navbar-brand">Nutricion y salud</li>
					<Link to="list" class="nav-item text-decoration-none btn btn-sm btn-success">
						<li class="nav-link">Buscar recetas</li>
					</Link>
				</Link>
				<Login />
			</nav>
			<main>
				<div className="container">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/list" component={List}/>
					</Switch>
				</div>
			</main>
		</Router>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)