import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const RemoveAll = ({ history }) => {
  const { removeAllTask } = useContext(TaskContext);

  const handleYesRemoveAll = () => {
    removeAllTask();
    history.push('/todo-list-app/');
  }
  return (
    <div className="ui raised very padded text container segment"  style={{paddingBottom: "8rem", paddingTop: "2.5rem", width: "35%"}}>
      <h1>Removing All Tasks!!</h1>
      <p style={{fontSize: "1.4rem"}}>Are you sure?</p>
      <div style={{marginTop: "2rem"}}>
        <div className="ui card centered" style={{width: "40%" , float: 'left', marginLeft: '2rem'}}>
          <button 
            className="ui button red"
            onClick={handleYesRemoveAll}
          >Yes, Remove All</button>
        </div>
        <div className="ui card centered" style={{width: "30%", marginTop: "0rem", float: 'right', marginRight: '2rem'}}>
          <button 
            className="ui button blue" 
            onClick={() => history.push("/todo-list-app/")}
          >No, Cancel</button>
        </div>
      </div>
      
      
    </div>
  );
}
 
export default RemoveAll;