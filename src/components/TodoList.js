import React ,{ useState , useEffect }from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import NewForm from './NewForm';

const TodoList = (obj) => {
	const [todos,setTodos] = useState(obj.list)
	const addTodo = (title) => {
		obj.addTodo({title,id:uuid()})		
	}
	useEffect(() => {
		setTodos(obj.list)
	},[obj.list])
	return(
	
	<div className="todo-list" data-testid="todoList">
		<NewForm addTodo={addTodo} />
		<ul id="myUL" data-testid="todos-ul">
		{
			todos.map(todo =>{
				return(<li className={todo.isComplete ? 'checked' : ''} key={todo.id}>{todo.title}   <button data-testid="todo-completed-button" className="deleteBtn" onClick={() => {if(window.confirm('Are you sure to delete this todo ?')){obj.deleteTodo(todo.id)};}} type="button">Remove</button><button className={todo.isComplete ? 'hideBtn' : 'finishBtn'} onClick={() =>obj.updateTodo(todo.id)} type="button">Mark completed</button>  </li>)
			})
		}	
		</ul>			
	</div>);
	
}
const mapStateToProps = (state) => {
		return{
			list:state.tododata
		}
	}
const mapDispatchToProps = (dispatch) => {
	return {
		addTodo : (obj) => { dispatch({type:'ADD_TODO',data:obj,isComplete:false})},
		updateTodo : (id) => { dispatch({type:'UPDATE_TODO',data:id})},
		deleteTodo : (id) => { dispatch({type:'DELETE_TODO',data:id})}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList); 
