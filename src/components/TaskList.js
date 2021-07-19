import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import TaskCountHeader from './TaskCountHeader';
import { TaskContext } from '../contexts/TaskContext';
import { Link } from "react-router-dom";

const taskList = {
  borderRadius: "1em", 
  marginTop: "1em",
  paddingLeft: "2em",
  paddingRight: "2em",
  paddingTop: "2em"
}

const TaskList = () => {
  const { tasks, removeAllTask } = useContext(TaskContext);

  return (
    <div>
    <TaskCountHeader/>
    <div className="ui raised very padded text container segment" style={taskList}>
      {
        tasks.map(task => {
          return(
              <TaskCard task={task} key={task.id}/>
          );
        })
      }
      <div className="ui card centered" style={{width: '9rem', marginTop: '3rem'}}>
        <button className="ui red button" onClick={removeAllTask} disabled={!tasks.length}>
          Remove All
        </button>
      </div>

      <div className="ui card centered" style={{width: '9rem', marginTop: '2rem'}}>
        <Link to="/add-task">
          <button className="ui blue button" style={{width: '9rem'}}>
            Add Task
          </button>
        </Link>
      </div>
    </div>

    <div style={{marginBottom: "3em"}}>
      <h1>.</h1>
    </div>
    </div>
    
  );
}
 
export default TaskList;

