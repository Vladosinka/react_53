import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import routes from '../../../configs/routes';

function Side() {
  return (
    <div className={styles.side}>
      <ul>
        {routes.map((item) =>
          item.show ? (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ) : (
            'biba'
          ),
        )}
      </ul>
    </div>
  );
}

export default Side;
