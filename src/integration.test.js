import { storeFactory } from '../test/testUtils';
describe('Insert new record In todo list', () =>{
	let store;
	let initialState = {
	rootReducer:{tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true}
	]}
	}
	beforeEach(() =>{
            store = storeFactory(initialState);
        }); 
	test('Insert a new record',()=>{
		store.dispatch({
            type:'ADD_TODO',
            data:{title:'Third Task',id:3,isComplete:false}
        });
		const newState = store.getState();
		const expectedState = {
			rootReducer : {tododata:[
			{title:'First Task',id:1,isComplete:false},
			{title:'Second Task',id:2,isComplete:true},
			{title:'Third Task',id:3,isComplete:false}
			]}
		}
		expect(newState).toEqual(expectedState); 
	})
    
});
describe('Delete a record From todo list', () =>{
    let store;
	let initialState = {
	rootReducer:{tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true}
	]
	}}
	beforeEach(() =>{
            store = storeFactory(initialState);
        });
	test('Delete a Todo record',()=>{
		store.dispatch({
            type:'DELETE_TODO',
            data:2
        });
		const newState = store.getState();
		const expectedState = {
			rootReducer : {tododata:[
			{title:'First Task',id:1,isComplete:false}
			]}
		}
		expect(newState).toEqual(expectedState); 
	})
    
});
describe('Mark a todo Completed', () =>{
    let store;
	let initialState = {
	rootReducer:{tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true}
	]}
	}
	beforeEach(() =>{
            store = storeFactory(initialState);
        });
	test('Complete a Todo record',()=>{
		store.dispatch({
            type:'UPDATE_TODO',
            data:1
        });
		const newState = store.getState();
		const expectedState = {
			rootReducer : {tododata:[
			{title:'First Task',id:1,isComplete:true},
			{title:'Second Task',id:2,isComplete:true}
			]}
		}		
		expect(newState).toEqual(expectedState); 
	})
    
});