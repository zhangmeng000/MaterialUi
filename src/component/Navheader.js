import React from 'react'
import {Link} from 'react-router'
class Navheader extends React.Component {
  handleBack(){
      this.context.router.goBack();
    }
  render () {
      return(
        <div className = 'nav-header'>
          <p onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-arrow-left"></span>Back</p>
          zhangmeng@{this.props.title}
          <p><Link to = '/'><span className="glyphicon glyphicon-th"></span></Link></p>
        </div>
      )
  }
}
Navheader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Navheader;
