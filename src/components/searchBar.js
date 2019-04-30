import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

//Initializing state above is empty string, but every time user enters text into search bar, state is updated

//prevents form from automatically submitting when user enters new text into form
//arrow funtion will bind this to searchBar, use arrow functions to prevent errors saying 'this' is undefined
	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label className="label" for="searchTerms">Search for a GIF:</label>
						<input 
							id="searchTerms" 
							type="text" 
							value={this.state.term} 
							onChange={e => this.setState({ term: e.target.value })}
						/>
						<button>Search</button>
					</div>
				</form>
			</div>
		);
	}
}


export default SearchBar;