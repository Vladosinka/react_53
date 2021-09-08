import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function Task({ number, title, description, assignee }) {
  return (
    <div className={styles.task}>
      <header>
        <span>{number}</span>
        <h3>{title}</h3>
      </header>
      <p>{description}</p>
      <span>{assignee}</span>
    </div>
  );
}

Task.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  assignee: PropTypes.string,
};
export default Task;
