import React from 'react';
import {Link} from 'react-router'

class NavFooter extends React.Component {
  render () {
      return(
        <div className = 'nav-footer'>
          <Link to='/' activeStyle = {{color:'red'}} onlyActiveOnIndex = {true}><span className="glyphicon glyphicon-home"></span><br />Home</Link>
          <Link to='/blog' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-bookmark"></span><br />Blog</Link>
          <Link to='/work' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-folder-open"></span><br />Work</Link>
          <Link to='/about' activeStyle = {{color:'red'}}><span className="glyphicon glyphicon-user"></span><br />About</Link>

        </div>
      )
  }
}

export default NavFooter;
