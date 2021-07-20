import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const RemoveAll = ({ history }) => {
  const { removeAllTask } = useContext(TaskContext);

  const handleYesRemoveAll = () => {
    removeAllTask();
    history.push('/');
  }
  return (
    <div className="ui raised very padded text container segment"  style={{paddingBottom: "2.5rem", paddingTop: "2.5rem", width: "35%"}}>
      <h1>Removing All Tasks!!</h1>
      <p style={{fontSize: "1.4rem"}}>Are you sure?</p>
      <div style={{marginTop: "2rem"}}>
        <div className="ui card centered" style={{width: "40%"}}>
          <button 
            className="ui button red"
            onClick={handleYesRemoveAll}
          >Yes, Remove All</button>
        </div>
        <div className="ui card centered" style={{width: "30%", marginTop: "1.5rem"}}>
          <button 
            className="ui button blue" 
            onClick={() => history.push("/")}
          >No, Cancel</button>
        </div>
      </div>
      
      
    </div>
  );
}
 
export default RemoveAll;