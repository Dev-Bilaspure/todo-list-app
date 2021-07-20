import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import TaskContextProvider from './contexts/TaskContext';
import TaskDetails from './components/TaskDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RemoveAll from './components/RemoveAll';
import RemoveTask from './components/RemoveTask';

const App = () => {
  const [cardInfo, setCardInfo] = useState({
    id: '',
    title: '',
    detail: ''
  });
  return (
    <div>
    <BrowserRouter>
      <TaskContextProvider>
      
      <Header />
        <Switch>
          <Route 
            exact path="/" 
            render={(props) => (<TaskList
              {...props}
              sendCardInfo={cardInfo => setCardInfo(cardInfo)}
            />)}
          />

          {/*<Route exact path="/" component={TaskList }/>*/}

          <Route exact path="/add-task" component={TodoForm } />

          <Route 
            exact path="/task/:id" 
            render={(props) => (<TaskDetails
              {...props}
              cardInfo={cardInfo}
            />)}
          />

          <Route exact path="/remove_all_task" component={RemoveAll} />

          <Route 
            exact path="/remove_task/:id" 
            render={(props) => (<RemoveTask
              {...props}
              cardInfo={cardInfo}
            />)}
          />
        </Switch>
      </TaskContextProvider>

    </BrowserRouter>
      
    </div>
  );
}
 
export default App;