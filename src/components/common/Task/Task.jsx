/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import styles from './style.scss';
import { ItemTypes } from '../../../configs/DnDItemTypes';

function Task({ number, title, description, assignee }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { number, title, description, assignee },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(item, dropResult);
      }
      return 'pep';
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`
        ${styles.task} 
        ${isDragging ? styles.drag : ''}
      `}
    >
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
