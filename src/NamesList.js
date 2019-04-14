import React from "react";
import FancyNames from "./FancyNames";

/**
 * This component has all the words in the list.
 * It keeps track of the ratings of any words, as they are changed
 * by the user.
 */
class NamesList extends React.Component {

	constructor(props) {
		super(props);
		this.updateRatedNames = this.updateRatedNames.bind(this);
	}

	updateRatedNames = (list) => {
		this.props.updateRatedNames(list);
	}

	render() {
		if (!this.props.names || this.props.names.length === 0) {
			return null;
		}
		var arr = [];
		let len = this.props.names.length;
		for (var i = 0; i < len; i++) {
			var name = this.props.names[i];
			// Is there a rating?
			var rating = this.props.ratings[i];
			arr.push(<FancyNames key={i} name={name} updateRatedNames={this.updateRatedNames} rating={rating} />);
		}
		return (
			<div id="bootstrap-overrides">
				{arr}
			</div>
		);
	}
}

export default NamesList;