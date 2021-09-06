/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/base/Header';
import Side from './components/base/Side';
import Main from './components/base/Main';
import styles from './appStyles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={`${classes.container} ${classes.container_vertical}`}>
          <Header />
          <div
            className={`${classes.container}
             ${classes.container_horisontal}`}
          >
            <Side />
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
