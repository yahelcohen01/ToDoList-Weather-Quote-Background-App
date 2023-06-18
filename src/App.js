import React, { Component } from 'react'
import Weather from './Weather/Weather';
import ImageList from './backgroundImage/imageList';
import unsplash from './api/unsplash';
import axios from 'axios';
import TodoList from './TodoList/TodoList';
import './index.css';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			weather: [],
			temp: [],
			clouds: [],
			quote: '',
			images: []
		}
	}
	// after the first iteration the app will render those functions
	componentDidMount() {
		this.fetchQuote();
		this.getWeather();
		this.getImages();
	}

	// Function to get images from UnsplashAPI 
	getImages = async () => {
		const term = 'sunny'; //search filter
		const response = await unsplash.get('/search/photos', { params: { query: term, page: 1, per_page: 10} });

		this.setState({
			images: response.data.results,
		});
	};

	//Function to get Quote from adviceslip API with Axios Client
	fetchQuote = () => {
		axios.get('https://api.adviceslip.com/advice').then((response) => {
			const { advice } = response.data.slip;

				this.setState({ quote: advice });
			})

			.catch((error) => {
				console.log('Error', error);
			})
	}

	//Function to get weather info from openweathermap API with Axios Client
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

	render() {

		return (
			<div className="App">
				<ImageList getImages={this.getImages} images={this.state.images} />
				<header>
					<Weather getWeather={this.getWeather} city={this.state.weather.name} temp={this.state.temp} clouds={this.state.clouds} />
					<div className="card">
						<h3 className="text-capitalize h3">
							{this.state.quote}
						</h3>
					</div>
				</header>
				<main>
					<div className="theme">
						<TodoList />
					</div>
				</main>
				<footer/>
			</div>
			
		);
	}
}

export default App;