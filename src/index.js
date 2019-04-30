// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';




// Show the react component in browser, grab root div in html file with 'root' id
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);