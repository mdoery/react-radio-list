import React from "react";
import NamesList from "./NamesList";

class RadioForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.handleGetNewNames = this.handleGetNewNames.bind(this);
		this.updateRatedNames = this.updateRatedNames.bind(this);
	}

	// When form is submitted, event e occurs.
	handleGetNewNames = (e) => {
		// Do not force a page reload
		e.preventDefault();
		this.props.handleGetNewNames();
	}

	updateRatedNames = (e) => {
		this.props.updateRatedNames(e);
	}

	render() {
		return <form onSubmit={this.handleGetNewNames}>
			<button>Get More Names</button>
			<NamesList ratings={this.props.ratings} names={this.props.names} updateRatedNames={this.updateRatedNames} />
		</form>;
	}
}
export default RadioForm;