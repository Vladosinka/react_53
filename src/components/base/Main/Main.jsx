import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Route } from 'react-router-dom';
import styles from './styles';
import routes from '../../../configs/routes';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      {routes.map((item) => (
        <Route
          key={item.title}
          exact={!!item.exact}
          path={item.url}
          component={item.component}
        />
      ))}
    </div>
  );
}

export default Main;
