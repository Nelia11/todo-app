import { useEffect, useState } from "react";
import { DateTime } from "luxon";

import './App.css';
import Heading from './components/Heading/Heading';
import TableList from "./components/TableList/TableLIst";
import AddTaskRow from "./components/AddTaskRow/AddTaskRow";
import Watch from "./components/Watch/Watch";

function App() {
  const API = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"

  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  //console.log(tasks)
 
  const fetchTasks = async (url) => {
    setIsLoading(true)
    try {
      const data = await fetch (url);
      const tasks = await data.json();
      setTasks((lastState) => {
        return lastState.concat(tasks);
      })
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchTasks(API);
  }, []);

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const isValidDescription = (input) => {
    if (!input) {
      alert ("Please, enter a description");
    }
    return !!input;
  };

  const isValidDate = (date) => {
    const today = DateTime.now().toFormat("yyyy-MM-dd");
    if (date < today) {
      alert ("Please, select an upcoming date");
      return false;
    }
    return true;
  };

  const handleAddTodo = (description, deadline) => {
    const newTask = {
      id: Date.now(), //tasks.length + 1; (tasks.at(-1).id + 1),
      description,
      deadline
    };
    if (isValidDescription(description) && isValidDate(deadline)) {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="App">
      <Heading 
        todos={tasks}
      />
      <Watch />
      <AddTaskRow 
        handleAddTodo={handleAddTodo} 
        isValidDescription={isValidDescription} 
        isValidDate={isValidDate}
      />
      <TableList 
        todos={tasks} 
        deleteTask={deleteTask} 
        isValidDescription={isValidDescription} 
        isValidDate={isValidDate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;