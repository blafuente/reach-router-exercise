import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Atlanta extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		axios.get(url)
		.then((weatherData)=>{
			console.log(weatherData.data);
			let icon = weatherData.data.weather[0].icon
			let temperature = weatherData.data.main.temp
			let mintemp = weatherData.data.main.temp_min
			let maxtemp = weatherData.data.main.temp_max
			let desc = weatherData.data.weather[0].description
			let humidity = weatherData.data.main.humidity
			console.log(temperature)
			this.setState({
				icon: icon,
				temp: temperature,
				temp_min: mintemp,
				temp_max: maxtemp,
				desc: desc,
				hum: humidity
			})

		})
	}

	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<ul>
					<li>Icon: {this.state.icon}</li>
					<li>Temperature: {this.state.temp} degrees </li>
					<li>Min Temp: {this.state.temp_min} degrees </li>
					<li>Max Temp: {this.state.temp_max} degrees </li>
					<li>Description: {this.state.desc}</li>
					<li>Humidity: {this.state.hum} %</li>
				</ul>
				
			</div>
		);
	}
}

export default Atlanta;
