import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import '@fortawesome/fontawesome-free/js/all.js'
import { BrowserRouter } from 'react-router-dom';

/* index.js */
import ReactGA from "react-ga4";

// 구글 애널리틱스 운영서버만 적용
if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
