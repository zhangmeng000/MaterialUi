import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
class Circle extends React.Component {
  render () {
    let styles = {
      root:{
        color:'red'
      }
    }
    return(
      <div>
        <CircularProgress />
        <CircularProgress size={1.5} />
        <CircularProgress size={2} />
      </div>
    )
  }
}

export default Circle;
