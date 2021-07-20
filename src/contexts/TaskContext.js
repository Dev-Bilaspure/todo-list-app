import React,{ createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')));

  },[]);    

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  const addTask = (task, discribe) => {
    setTasks([...tasks, {todo: task, discription: discribe, id: uuidv4()}]);
  }
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const removeAllTask = () => {
    setTasks([]);
  }
  const updateTask = (id, task, discribe) => {
    let arr = tasks;
    for(let i=0;i<arr.length;i++) {
      if(arr[i].id === id) {
        arr[i].todo = task;
        arr[i].discription = discribe;
      }
    }
    localStorage.setItem('tasks', JSON.stringify(arr))
  }
  return(
    <TaskContext.Provider value={{tasks, addTask, removeTask, removeAllTask, updateTask}}>
      {props.children}
    </TaskContext.Provider>
  );
}


export default TaskContextProvider;