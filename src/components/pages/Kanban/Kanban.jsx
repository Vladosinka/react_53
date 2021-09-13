/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import TaskColumn from '../../common/TaskColumn/TaskColumn';
import styles from './style.scss';
import dataService from '../../../services/dataService';
import Loader from '../../common/Loader/Loader';

function Kanban() {
  const [tasks, setTasks] = useState('[]');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log('mount');
    dataService.getTasks().then((data) => {
      console.log(JSON.stringify(data));
      setLoader(false);
      setTasks(JSON.stringify(data));
    });
  }, [tasks]);

  return (
    <div className={styles.kanban}>
      <TaskColumn
        title="To Do"
        tasks={JSON.parse(tasks).filter(
          ({ taskStatus }) => taskStatus === 'todo',
        )}
      />
      <TaskColumn
        title="In Progress"
        tasks={JSON.parse(tasks).filter(
          ({ taskStatus }) => taskStatus === 'progress',
        )}
      />
      <TaskColumn
        title="PR"
        tasks={JSON.parse(tasks).filter(
          ({ taskStatus }) => taskStatus === 'pr',
        )}
      />
      <TaskColumn
        title="Done"
        tasks={JSON.parse(tasks).filter(
          ({ taskStatus }) => taskStatus === 'done',
        )}
      />
      <Loader visible={loader} />
    </div>
  );
}

export default Kanban;
