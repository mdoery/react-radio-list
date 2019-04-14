import React, { Component } from 'react';
import './App.css';
import RadioForm from './RadioForm';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			names: ["Deadmau5", "Zedd", "Ellie Goulding"],
			ratings: ["green", "yellow", "red"]
		}
		this.handleGetNewNames = this.handleGetNewNames.bind(this);
		this.updateRatedNames = this.updateRatedNames.bind(this);
	}

	// You could use this method to store the current settings on a server if so desired.
	handleGetNewNames = () => {
		// Do not force a page reload
		this.setState({
			names: ["Mickey Mouse", "Donald Duck", "Goofy"],
			ratings: ["yellow", "green", "green"]
		});
	}

	updateRatedNames = (e) => {
		const rating = e.rating;
		const name = e.name;
		const index = this.state.names.indexOf(name);
		const newRatings = [];
		this.state.ratings.forEach(function (el, i) {
			if (i !== index) {
				newRatings.push(el);
			} else {
				newRatings.push(rating);
			}
		})
		this.setState({
			ratings: newRatings
		});
	}

	render() {
		var str = "";
		this.state.names.forEach(function (name, i) {
			str += "{ " + name + " : " + this.state.ratings[i] + " }";
		}.bind(this));
		return (
			<div className="App">
				<div>
					<p>
						This example shows how your settings are stored as state in the parent App, and how props are used by children.
					</p>
					<p>
						When you click a radio button, that state is "<a href="https://reactjs.org/docs/lifting-state-up.html">lifted up</a>" to the parent App. State is only stored higher up in the App class, not in any children.
					</p>
					<p>
						Only the parent App retains state. All settings are sent to children as "<a href="https://reactjs.org/docs/components-and-props.html">props</a>".
					</p>
					<p>
						See the <a href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React</a> guide for more information.
					</p>
				</div>
				<div>
					Your settings: {str}
				</div>
				<RadioForm names={this.state.names} ratings={this.state.ratings}
					updateRatedNames={this.updateRatedNames} handleGetNewNames={this.handleGetNewNames} />
			</div>
		);
	}
}

export default App;
