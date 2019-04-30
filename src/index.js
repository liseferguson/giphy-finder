// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// When returning JSX, make sure element to be returned starts on same line as return statement OR opening parenthesis of block of code is on same line as return statement
const App = () => {
	return (
		<div>
			<label class="label" for="searchTerms">Search for a GIPH:</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>Search</button>
		</div>
	);
};

// Show the react component in browser, grab root div in html file with 'root' id
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);