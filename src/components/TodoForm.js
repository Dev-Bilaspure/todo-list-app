import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { Link } from 'react-router-dom';

const inputStyle = {
  borderRadius: "1em", 
  marginTop: "1.5em",
  marginBottom: "3em",
  paddingTop: "2em",
  paddingLeft: "2em",
  paddingRight: "2em",
  paddingBottom: '9rem'
}
const submitButtonStyle = {
  width: "100%", 
  fontSize: "1.3em", 
  height: "2em", 
  paddingTop: "0.57em"
}
const submitButtonDivStyle = {
  marginTop: "0rem",
  width: "25%",
  float: 'right',
  marginRight: '8rem',
  marginTop: '3rem'
}
const inputBarDivStyle = {
  width: "100%",
  height: "2.83em",
  paddingTop: "0",
  paddingBottom: "0",
  paddingRight: "0",
  paddingLeft: "0",
  borderRadius: '4em'
}
const inputBarStyle = {
  border: "none", 
  borderRadius: '3em'
}

const textAreaStyle = {
  borderRadius: "1.5em", 
  paddingTop: "1.2em", 
  paddingLeft: "1.2em", 
  paddingRight: "1.2em"
}
const textAreaDivStyle = {
  width: "100%", 
  padding: "0 0 0 0", 
  borderRadius: "1.5em"
}

const TodoForm = (props) => {
  const { addTask } = useContext(TaskContext);
  const [todo, setTodo] = useState("")
  const [discribe, setDiscribe] = useState('(Empty)');

  const handleSubmit = (e) => {
    e.preventDefault();
    todo ? addTask(todo, discribe) : alert("Empty title is not allowed");
    todo && props.history.push("/todo-list-app/");
    e.target.elements.task.value='';
    e.target.elements.discribe.value='';
    setTodo('');
    setDiscribe('');
  }

  return (
    <div className="ui raised very padded text container segment" style={inputStyle}>
      <h1 style={{marginLeft: "0.3em", fontSize: "2.3rem"}}>Add Task:</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field" style={{marginTop: "2.5em"}}>
          <label style={{fontSize: "1.2em", marginLeft: "0.87rem"}}>Enter the task todo</label>
          <div className="ui raised very padded text container segment" style={inputBarDivStyle}>
            <input type="text"  required name="task" placeholder="Task todo..." style={inputBarStyle} onChange={(e) => {
              setTodo(e.target.value);
            }}/>
          </div>
          <div>
            <h4 style={{marginLeft: "0.8em", marginTop: "2em"}}>Discription:</h4>
            <div className="ui raised very padded text container segment" style={textAreaDivStyle}>
              <div className="ui form">
                <div className="field">
                  <textarea 
                    style={textAreaStyle} 
                    placeholder="Discribe the task (optional)"
                    name="discribe"
                    onChange={(e) => {setDiscribe(e.target.value)}}
                    ></textarea>
                </div>
              </div>
            </div>
          </div>
          
        
          
        </div>
        <div className="ui card centered" style={submitButtonDivStyle}>
            <button className="ui button green" type="submit" style={submitButtonStyle}>Add</button>
        </div>
      </form>
      <div className="ui card centered" style={{width: "25%", float: 'left', marginTop: '0rem', marginLeft: '8rem', marginTop: '3rem'}}>
        <Link to="/todo-list-app/">
          <button className="ui button blue"  style={{fontSize: "1em", width: "100%"}}>
            Go To Todo List
          </button>
        </Link>
      </div>
    </div>
    
  );
}
          
export default TodoForm;