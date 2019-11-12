import React from 'react';
import ReactDom from 'react-dom';
import NewForm from './../NewForm';
import {render,cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
afterEach(cleanup);
it('Render without Crashing',() => {
	const div =  document.createElement("div");
	ReactDom.render(<NewForm></NewForm>,div)  
})
it('Render Correctly',() => {
	const{getByTestId} = render(<NewForm></NewForm>)
	expect(getByTestId('todoform').textContent).toBe('My To Do List');
})

it("matched snapshot",() => {
	const tree = renderer.create(<NewForm></NewForm>).toJSON();
	expect(tree).toMatchSnapshot();
})

