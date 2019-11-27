import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './../TodoList';
import {render,cleanup,fireEvent ,wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import rootReducer from './../../reducers/rootReducer';

afterEach(cleanup);

test('Render without Crashing',() => {
	const initState = {
	tododata:[
	{title:'First Task',id:1,isComplete:false}
	]
}
	const store = createStore(rootReducer,initState);
	const div =  document.createElement("div");
	ReactDom.render(<Provider store={store}><TodoList></TodoList></Provider>,div)  
})
test('Render List Correctly',() => {
	const initState = {
	tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true},
	{title:'thord Task',id:3,isComplete:true}
	]
	}
	const store = createStore(rootReducer,initState);
	const{getByTestId } = render(<Provider store={store}><TodoList ></TodoList></Provider>);
	const unorderedListOfTodos = getByTestId('todos-ul');
	expect(unorderedListOfTodos.children.length).toBe(3);
});
test('Render Mark Complete Button Correctly',() => {
	const initState = {
	tododata:[
	{title:'First Task',id:1,isComplete:false}	
	]
	}
	const store = createStore(rootReducer,initState);
	const{getByTestId } = render(<Provider store={store}><TodoList ></TodoList></Provider>);
	const todoCompleted = getByTestId('todo-completed-button');
	expect(todoCompleted).toBeTruthy();
});



