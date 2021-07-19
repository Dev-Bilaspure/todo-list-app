import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';

const taskCardStyle = {
  borderRadius: "0.5em", 
  paddingLeft: "1.8em",
  paddingRight: "1.8em",
  fontSize: "0.7em",
  paddingTop: "1.1em",
  paddingBottom: "4.3em",
  width: "100%",
}
const trashButtonStyle = {
  float: "right"
}
const TaskCard = ({task}) => {
  const { removeTask } = useContext(TaskContext);

  let resizeDiscription = (discrip) => {
    let str = '';
    if(discrip.length>10) {
      
      for(let i=0;i<18;i++) {
        str+=discrip[i];
      }
      str+='...';
    }
    return(str);
  }

  return (
    <div className="ui raised very padded text container segment" style={taskCardStyle}>
      <div className="item">
        <div className="content" style={{float: "left", marginTop: "0.3em", marginBottom: "0.3em"}}>
            <div className="header" onClick={<TaskDetails task={task}/>}>
              <h3>{task.todo}</h3>
            </div>
            <div>
              {resizeDiscription(task.discription)}
            </div>
        </div>
        <button className="ui red basic button" style={trashButtonStyle} onClick={() => removeTask(task.id)}>
          Remove
        </button> 
      </div>

    </div>
  );
}

export default TaskCard;



