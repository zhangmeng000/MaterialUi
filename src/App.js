import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Circle from './Circle'
import Liner from './liner'
import HorizontalLinearStepper from './data'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class   App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render () {
    return(
      <div >
          <MyAwesomeReactComponent />
          <Circle />
          <Liner />
          <HorizontalLinearStepper />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default  App;
