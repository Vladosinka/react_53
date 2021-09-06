import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-router-dom';
import styles from './styles';
import routes from '../../../configs/routes';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
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
