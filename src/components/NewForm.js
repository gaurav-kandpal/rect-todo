import React ,{ useState }from 'react';

const NewForm = ({ addTodo }) => {
	const [title,setTitle] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(title);
		setTitle('');
	}
	return(
	<div id="myDIV" data-testid="todoform" className="header">
		<h2>My To Do List</h2>
		<form  onSubmit={handleSubmit}>			
			<input type="text" value={title} required onChange ={(e) => setTitle(e.target.value)}/>
			<input type="submit" value="Add ToDo" />
		</form>
	</div>	
	);
}
export default NewForm;
