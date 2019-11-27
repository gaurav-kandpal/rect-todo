import React ,{ useState }from 'react';

const NewForm = ({ addTodo }) => {
	const [title,setTitle] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(title);
		setTitle('');
	}
	return(
	<div id="myDIV" data-testid="todoForm" className="header">
		<h2 data-testid="todoHeading">My To Do List</h2>
		<form data-testid="form" onSubmit={handleSubmit}>			
			<input type="text"  placeholder="Enter Todo" value={title} required onChange ={(e) => setTitle(e.target.value)}/>
			<input data-testid="todoButton" type="submit" value="Add ToDo" />
		</form>
	</div>	
	);
}
export default NewForm;
