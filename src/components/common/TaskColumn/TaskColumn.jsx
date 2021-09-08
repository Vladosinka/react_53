/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import styles from './style.scss';

function TaskColumn({ title, tasks }) {
  return (
    <div className={styles.taskColumn}>
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
