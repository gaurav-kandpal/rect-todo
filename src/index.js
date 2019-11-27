import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
const initState = {
	tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true},
	{title:'thord Task',id:3,isComplete:true}
	]
}
const store = createStore(rootReducer,initState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
