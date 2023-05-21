import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css'
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTitle,setnewTitle]=useState('');
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/todos');
      setTodos(response.data);
      console.log("jfdasf")
    } catch (error) {
      console.log(error);
    }
  };

  const createTodo = async () => {
    try {
      await axios.post('http://localhost:8000/api/todos', { title: newTodo });
      fetchTodos();
      setNewTodo('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/${id}`,);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleupdate = async (id) => {
    try{
      await axios.put(`http://localhost:8000/api/todos/${id}`,{ title : newTitle });
      fetchTodos();
      setNewTodo('')
    } catch(error)
    {
      console.log(error);
    }
  } 
  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='textbox'
        />
        <button className='btns' onClick={createTodo}>Add</button>
      </div>
      <div>
        <table className='containertbl'>
          <thead>
            <tr>
          <th className='containerhead ttle'>Title</th>
          <th className='containerhead'>Update here</th>
          <th className='containerhead'>Trigger Update</th>
          <th className='containerhead'>Delete button</th>
          </tr>
          </thead>
          <tbody>
        {todos.map((todo) =>(
          <tr key={todo.id} className="controw">
            
            <td className='ttle'>{todo.title}{" "}</td>
            <td><input type='text' className='textbox' placeholder='New Title' onChange={(e)=>{setnewTitle(e.target.value)}}/></td>
            <td><button className="btns" onClick={()=> handleupdate(todo.id)}>Update</button></td>
            <td><button type="button" className="btns"onClick={()=> deleteTodo(todo.id)}>Delete</button></td>
          </tr>
))}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default App;