import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactGA.initialize('UA-159992142-1')

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
