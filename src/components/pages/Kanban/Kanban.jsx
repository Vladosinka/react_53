/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import TaskColumn from '../../common/TaskColumn/TaskColumn';
import styles from './style.scss';
import dataService from '../../../services/dataService';
import Loader from '../../common/Loader/Loader';
import actions from './actions';
import selectors from './selectors';

function Kanban(props) {
  // const { tasks, isLoading, loadTasks, setIsLoading } = props;
  const [tasks, setTasks] = useState('[]');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    dataService.getTasks().then((data) => {
      setIsLoading(false);
      setTasks(JSON.stringify(data));
      // setIsLoading(false);
      // loadTasks(data);
    });
  }, [tasks]);

  return (
    <DndProvider backend={HTML5Backend}>
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
        <Loader visible={isLoading} />
      </div>
    </DndProvider>
  );
}
// const mapStateToProps = (state) => ({
//   tasks: selectors.getTasks(state),
//   isLoading: selectors.getIsLoading(state),
// });
// export default connect(mapStateToProps, actions)(Kanban);

export default Kanban;
