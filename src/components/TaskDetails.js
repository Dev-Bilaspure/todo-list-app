import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({cardInfo, history}) => {
  const { updateTask } = useContext(TaskContext);

  const [title, setTitle] = useState(cardInfo.title);
  const [detail, setDetail] = useState(cardInfo.detail);

  const handleClickOk = () => {
    updateTask(cardInfo.id, title, detail);
    history.push("/");
  }
  
  return (
    <div>
      <div className="ui raised very padded text container segment" style={{marginTop: "3em", paddingLeft: "2em", paddingRight: "2em", paddingTop: "1.5em"}}>
        <h1 style={{fontSize: "2.3rem"}}>View/Update Task:</h1>
        <div style={{marginTop: "2em"}}>
        
          <h3 style={{fontSize: "1.6rem"}}>Task:</h3>
          <div className="ui large icon input" style={{width: "100%"}}>
          <input  
            type="text" 
            placeholder="Task todo..." 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{width: "100%"}} 
          />
          </div>

          <div style={{marginTop: "2em"}}>
            <h3 style={{fontSize: "1.5rem"}}>Discription:</h3>
            <div className="ui form" >
              <div className="field">
                <textarea 
                  style={{paddingTop: "1.4em", paddingLeft: "1.4em", paddingRight: "1.4em"}}
                  placeholder="Discribe the task (optional)" 
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="ui card centered" style={{width: "15%", marginTop: "2.5em"}}>
            <button 
              className="ui button green"  
              style={{fontSize: "1em", width: "100%", paddingLeft: "0.2rem", paddingRight: "0.2rem"}}
              onClick={handleClickOk}
            >OK</button>
          </div>
          <div className="ui card centered" style={{width: "23%", marginTop: "2.5em"}}>
            <button 
              className="ui button red"  
              style={{fontSize: "1em", width: "100%", paddingLeft: "0.2rem", paddingRight: "0.2rem"}}
              onClick={() => history.push("/")}
              disabled={cardInfo.title===title && cardInfo.detail===detail}
            >Discard Changes</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default TaskDetails;