import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import TaskContextProvider from './contexts/TaskContext';
import TaskDetails from './components/TaskDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <TaskContextProvider>
      <Header />
        <Switch>
        
        <Route exact path="/" component={TaskList }/>
        <Route exact path="/add-task" component={TodoForm } />
        </Switch>
        <TaskDetails />
        </TaskContextProvider>

    </BrowserRouter>
      
    </div>
  );
}
 
export default App;