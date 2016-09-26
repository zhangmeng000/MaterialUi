import React from 'react';
import {Link} from 'react-router'

class LeftNav extends React.Component {
  render () {
      return(
        <div className = 'left-nav'>
          <h3>zhangmeng@{this.props.title}</h3>
          <Link to='/' activeStyle = {{color:'red'}} onlyActiveOnIndex = {true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />Home</Link>
          <Link to='/blog' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span><br />Blog</Link>
          <Link to='/work' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span><br />Work</Link>
          <Link to='/about' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br />About</Link>

        </div>
      )
  }
}
export default LeftNav;
