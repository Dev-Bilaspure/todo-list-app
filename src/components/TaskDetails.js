import React from 'react';

const TaskDetails = () => {

  return (
    <div>
      <div className="ui raised very padded text container segment" style={{marginTop: "3em", paddingLeft: "2em", paddingRight: "2em", paddingTop: "1.5em"}}>
        <h3>Task</h3>
        <div className="ui large icon input" style={{width: "100%"}}>
          <input  
            type="text" 
            placeholder="Task todo..." 
            required
            style={{width: "100%"}} 
          />
        </div>

        <div style={{marginTop: "2em"}}>
          <h3>Discription</h3>
          <div className="ui form" >
            <div className="field">
              <textarea 
                style={{paddingTop: "1.4em", paddingLeft: "1.4em", paddingRight: "1.4em"}}
                placeholder="Discribe the task (optional)" 
                ></textarea>
            </div>
          </div>
        </div>

        <div className="ui card centered" style={{width: "15%", marginTop: "2.5em"}}>
          <button 
            className="ui button green"  
            style={{fontSize: "1em", width: "100%"}}
          >OK</button>
      </div>
      </div>
    </div>
    
  );
}

export default TaskDetails;