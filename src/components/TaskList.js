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

const TaskList = ({sendCardInfo}) => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
    
    <div className="ui raised very padded text container segment" style={taskList}>
    <TaskCountHeader/>
      {
        tasks.map(task => {
          return(
              <TaskCard task={task} key={task.id} sendCardInfo={sendCardInfo}/>
          );
        })
      }
      <div className="ui card centered" style={{width: '9rem', marginTop: '3rem'}}>
        
          <button className="ui red button" disabled={!tasks.length} style={{width: "100%"}}>
            <Link to="/remove_all_task" style={{color: "white"}}>
              Remove All
            </Link> 
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

