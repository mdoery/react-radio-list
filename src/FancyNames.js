import React from "react";

class FancyNames extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange = changeEvent => {
		// Do NOT preventDefault. If you call this method, it prevents the radio button from displaying changed state when the user clicks it.
		// The radio buttons will then show up empty (none checked) upon clicking, despite the fact that this class is re-rendered with the correct props!!
		// changeEvent.preventDefault();
		this.props.updateRatedNames({
			value: changeEvent.target.value, rating: changeEvent.target.value, name: this.props.name
		});
	};

	render() {
		return <div className="container" >
			<input type="radio" value="red" checked={this.props.rating === "red"}
				onChange={this.handleOptionChange} />
			<input type="radio" value="yellow" checked={this.props.rating === "yellow"} onChange={this.handleOptionChange} />
			<input type="radio" value="green" checked={this.props.rating === "green"} onChange={this.handleOptionChange} />
			<span>{this.props.name}</span>
			<br />
		</div>
	}
}

export default FancyNames;