import React, { useState } from 'react';
import TaskItem from './component5';
import AddTask from './component4';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      <AddTask onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => deleteTask(task)} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;