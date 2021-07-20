import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { Link } from 'react-router-dom';

const taskCardStyle = {
  borderRadius: "0.5em", 
  paddingLeft: "1.8em",
  paddingRight: "1.8em",
  fontSize: "0.7em",
  paddingTop: "0.8em",
  paddingBottom: "4.3em",
  width: "100%",
}
const trashButtonStyle = {
  float: "right"
}
const TaskCard = ({task, sendCardInfo}) => {
  const { removeTask } = useContext(TaskContext);
  
  let resizeDiscription = (discrip) => {
    let str = '';
    if(discrip.length>10) {
      
      for(let i=0;i<10;i++) {
        str+=discrip[i];
      }
      str+='...';
      return(str);
    }
    else
      return(discrip);
    
  }

  return (
    <div className="ui raised very padded text container segment" style={taskCardStyle}>
      <div className="item">
        <div className="content" style={{float: "left", marginTop: "0.3em", marginBottom: "0.3em"}}>
         
            <Link to={`/task/${task.id}`} onClick={() => {
              let obj = {
                id: task.id,
                title: task.todo,
                detail: task.discription
              }
              sendCardInfo(obj) 
            }}>
              <div className="header">
                <h3>{task.todo}</h3>
              </div>
              <div>
                {resizeDiscription(task.discription)}
              </div>
            </Link>
          
          
        </div>
        <button className="ui red basic button" style={trashButtonStyle}>
          <Link to={`/remove_task/${task.id}`} onClick={() => {
            let obj = {
              id: task.id,
              title: task.todo,
              detail: task.discription
            }
            sendCardInfo(obj) 
          }} style={{color: "rgb(224,10,10)"}}>
            Remove
          </Link>
        </button> 
      </div>

    </div>
  );
}
 
export default TaskCard;



