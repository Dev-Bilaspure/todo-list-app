import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const headerStyle = {
  height: "3em", 
  borderRadius: "1em", 
  paddingTop: "0.8em",
  textAlign: "center",
  marginTop: "1.5em",
  fontSize: "1.4rem",
  paddingBottom: "1em"
}
const TaskCountHeader = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="ui raised very padded text container segment" style={headerStyle}>
        {tasks.length>0 ? <h1 style={{fontSize: "1em"}}>{tasks.length} Tasks Todo</h1> : <h1 style={{fontSize: "1em"}}>No Task Todo. Hello Free Time...</h1>}
    </div>
  );
}

export default TaskCountHeader;