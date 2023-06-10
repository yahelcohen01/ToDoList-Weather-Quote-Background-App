import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import Weather from './components/Weather';
import Input from './components/WeatherInput';

import axios from 'axios';
import './style.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
			itemsToShow: "all",
			id: uuid(),
			item: '',
			editItem: false,
			weather: [],
			temp: [],
			clouds: []
		}
	}

	getWeather = query => {
		axios.get('https://api.openweathermap.org/data/2.5/find?q=jerusalem&units=metric&appid=c4b2e1361fac39b9a24cc90848cddb5d')
			.then(response => {
				this.setState({
					weather: response.data.list[0],
					temp: response.data.list[0].main.temp,
					clouds: response.data.list[0].weather[0].description
				});
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
	}

	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			completed: false
		}

		const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				editItem: false
			})
		}
	}

	updateTodosToShow = string => {
		this.setState({
			itemsToShow: string
		});
	};

	handleDoneTask = (id, completed) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems
		})
	}

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		const selectedItem = this.state.items.find(item => item.id === id)

		this.setState({
			items: filteredItems,
			id: id,
			item: selectedItem.title,
			editItem: true
		})
	}

	render() {
		let items = []

		if (this.state.itemsToShow === "all") {
			items = this.state.items;
		} else if (this.state.itemsToShow === "todo") {
			items = this.state.items.filter(item => !item.completed);
		} else if (this.state.itemsToShow === "done") {
			items = this.state.items.filter(item => item.completed);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">TodoInput</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList
							items={items}
							filterDoneTasks={this.filterDoneTasks}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleDoneTask={this.handleDoneTask}
							updateTodosToShow={this.updateTodosToShow}
						/>
						
					</div>
				</div>
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">weather</h3>
						<Weather getWeather={this.getWeather('jerusalem')} city={this.state.weather.name} temp={this.state.temp} clouds={this.state.clouds} />
					</div>
				</div>
			</div>
			
		);
	}
}

export default App;