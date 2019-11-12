const initState = {
	tododata:[
	{title:'First Task',id:1,isComplete:false},
	{title:'Second Task',id:2,isComplete:true},
	{title:'Third Task',id:3,isComplete:false}
	]
}

const rootReducer = (state = initState, action) => {
	if(action.type === 'ADD_TODO')
	{
		return{
			...state,
			tododata : [...state.tododata,action.data]
		}
	}
	if(action.type === 'DELETE_TODO')
	{
		return{
			...state,
			tododata : state.tododata.filter(function( obj ){ return obj.id !== action.data;})
		}
	}
	if(action.type === 'UPDATE_TODO')
	{
		return{
			...state,
			tododata :  state.tododata.map(obj => obj.id === action.data ? { ...obj, isComplete: true } : obj)
		}
	}
	return state;
}
export default rootReducer;