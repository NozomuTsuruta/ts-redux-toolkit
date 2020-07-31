import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { RootState } from '../ducks/store';

const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      {tasks.length <= 0 ? (
        '登録されたTodoはありません'
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
