/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import Task from '../Task';
import styles from './style.scss';
import { ItemTypes } from '../../../configs/DnDItemTypes';

function TaskColumn({ title, tasks }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // if (item && dropResult) {
      console.log(item, dropResult);
      // }
      return { title };
    },
    // collect: (monitor) => ({
    //   isOver: !!monitor.isOver(),
    // }),
  }));
  return (
    <div className={styles.taskColumn} ref={drop}>
      <header>{title}</header>
      <section>
        {tasks.map((item) => (
          <Task
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
            assignee={item.assignee}
          />
        ))}
      </section>
    </div>
  );
}

TaskColumn.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default TaskColumn;
