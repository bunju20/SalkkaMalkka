import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import '@fortawesome/fontawesome-free/js/all.js'
import { BrowserRouter } from 'react-router-dom';
import RouteChangeTracker from "./components/RouteChangeTracker";
import { store } from './app/store';
import { Provider } from 'react-redux';



/* index.js */
import ReactGA from "react-ga4";

// 구글 애널리틱스 운영서버만 적용
if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}


ReactDOM.render(
	
	
	<BrowserRouter>
	<Provider store={store}>
		<App />
		</Provider>
	</BrowserRouter>,document.getElementById('root')
)
