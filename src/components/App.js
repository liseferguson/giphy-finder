import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './giphyList';


// When returning JSX, make sure element to be returned starts on same line as return statement OR opening parenthesis of block of code is on same line as return statement
class App extends React.Component {
state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await axios
		.get('http://api.giphy.com/v1/gifs/search', {
			params: { 
				q: term,
				api_key: 'gQjy6JqROhGwELJIiFXL923sXlZ29LJg'
				
			 }
		});
		this.setState({ images: response.data.data });
	}

	render(){
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images} />
			</div>
		);
	}	
}

export default App;