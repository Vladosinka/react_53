import React from 'react';
import TaskColumn from '../../common/TaskColumn/TaskColumn';
import styles from './style.scss';

const tasks = [
  {
    number: '1',
    title: 'Task1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    assignee: 'Yan',
    taskStatus: 'todo',
  },
  {
    number: '2',
    title: 'Task1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    assignee: 'Yan',
    taskStatus: 'todo',
  },
  {
    number: '3',
    title: 'Task1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    assignee: 'Yan',
    taskStatus: 'progress',
  },
  {
    number: '4',
    title: 'Task1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    assignee: 'Yan',
    taskStatus: 'pr',
  },
  {
    number: '5',
    title: 'Task1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    assignee: 'Yan',
    taskStatus: 'done',
  },
];

function Kanban() {
  return (
    <div className={styles.kanban}>
      <TaskColumn
        title="To Do"
        tasks={tasks.filter(({ taskStatus }) => taskStatus === 'todo')}
      />
      <TaskColumn
        title="In Progress"
        tasks={tasks.filter(({ taskStatus }) => taskStatus === 'progress')}
      />
      <TaskColumn
        title="PR"
        tasks={tasks.filter(({ taskStatus }) => taskStatus === 'pr')}
      />
      <TaskColumn
        title="Done"
        tasks={tasks.filter(({ taskStatus }) => taskStatus === 'done')}
      />
    </div>
  );
}

export default Kanban;
