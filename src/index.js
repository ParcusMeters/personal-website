import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'

//lowkey scared if i remove this it will break

const port = process.env.PORT || 3000;
const root = ReactDOM.render(<App />, document.getElementById('root'));

