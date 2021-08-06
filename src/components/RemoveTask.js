import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const RemoveTask = ({cardInfo, history}) => {
  const { removeTask } = useContext(TaskContext);

  const handleClickYesRemove = () => {
    removeTask(cardInfo.id);
    history.push("/todo-list-app/")
  }

  let resizedTitle = (title) => {
    if(!title)
      return(title);
    if(title.length<=8)
      return(title);
      
    else {
      let str = '';
      for(let i=0;i<9;i++) 
        str+=title[i];
      str+='...'
      return(str);
    }
  }
  return (
    <div className="ui raised very padded text container segment"  style={{paddingBottom: "6rem", paddingTop: "2.5rem", width: "45%", marginTop: '5rem'}}>
      <h1>Removing "{resizedTitle(cardInfo.title)}" from task list!!</h1>
      <p style={{fontSize: "1.4rem"}}>Are you sure?</p>
      <div style={{marginTop: '3rem'}}>
        <div style={{marginTop: "2rem"}}>
          <div className="ui card centered" style={{width: "25%", float: 'left', marginLeft: '6rem'}}>
            <button 
              className="ui button red"
              onClick={handleClickYesRemove}
            >Yes, Remove</button>
          </div>
          <div className="ui card centered" style={{width: "25%", marginTop: "0rem", float: 'right', marginRight: '6rem'}}>
            <button 
              className="ui button blue" 
              onClick={() => history.push("/todo-list-app/")}
            >No, Cancel</button>
          </div>
      </div>
      
      </div>
    </div>
  );
}
 
export default RemoveTask;