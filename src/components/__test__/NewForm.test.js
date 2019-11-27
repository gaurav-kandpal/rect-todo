import React from 'react';
import ReactDom from 'react-dom';
import NewForm from './../NewForm';
import {render,cleanup,fireEvent ,wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
afterEach(cleanup);

test('Render without Crashing',() => {
	const div =  document.createElement("div");
	ReactDom.render(<NewForm></NewForm>,div)  
})
test('Render Correctly',() => {
	const onSubmit = jest.fn();
	const{getByTestId } = render(<NewForm/>)
	expect(getByTestId('todoForm').textContent).toBeTruthy();	
});
test('Check Input box',() => {
	const{getByPlaceholderText,getByText} = render(<NewForm/>)
	const inputNode = getByPlaceholderText("Enter Todo");
	fireEvent.change(inputNode, {
		target: { value: "Input has changed" }
	  });
    expect(inputNode.value).toBe('Input has changed');	
});
test('Submit Correctly',() => {
	const addTodo = jest.fn();
	const{getByTestId} = render(<NewForm addTodo={addTodo}  />)
	fireEvent.submit(getByTestId("form"));	
	expect(addTodo).toHaveBeenCalled();
});



