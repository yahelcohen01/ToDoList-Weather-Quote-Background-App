import React, { Component } from 'react'
import Weather from './Weather/Weather';

import axios from 'axios';
import TodoList from './TodoList/TodoList';
import Quote from './Quote/Quote';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			weather: [],
			temp: [],
			clouds: [],
			quote: ''
		}
	}
	componentDidMount() {
		this.fetchQuote();
	}

	fetchQuote = () => {
		axios.get('https://api.adviceslip.com/advice')
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ quote: advice });
			})

			.catch((error) => {
				console.log(error);
			})
	}

	getWeather = () => {
		axios.get('https://api.openweathermap.org/data/2.5/find?q=jerusalem&units=metric&appid=c4b2e1361fac39b9a24cc90848cddb5d')
			.then(response => {
				this.setState({
					weather: response.data.list[0],
					temp: response.data.list[0].main.temp,
					clouds: response.data.list[0].weather[0].description
				})
			})
			.catch(error => {
				console.log('Error', error);
			});
	};

	queryWeather = (event, cityName) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			cityName = event.target.value;
			this.getWeather(cityName);
		}
	};

	render() {

		return (
			<div className="App">
				<header>
					<h3 className="text-capitalize">weather</h3>
					<Weather getWeather={this.getWeather} city={this.state.weather.name} temp={this.state.temp} clouds={this.state.clouds} />
					<div className="card">
						<h3 className="text-capitalize h3">
							{this.state.quote}
						</h3>
					</div>
				</header>
				<main>
					<div className="row">
						<TodoList />
					</div>
				</main>
			</div>
			
		);
	}
}

export default App;