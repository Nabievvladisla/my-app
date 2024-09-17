import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li class="container">
      {task}
      <button class="gradient-button" onClick={onDelete}>Видалити</button>
    </li>
  );
};

export default TaskItem;