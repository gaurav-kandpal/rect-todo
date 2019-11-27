import React from 'react';
import ReactDOM from 'react-dom';
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
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
