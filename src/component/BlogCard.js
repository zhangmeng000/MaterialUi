import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class BlogCard extends React.Component {
  render () {
    let styles = {
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'95%',
        borderRadius:'5px',
        margin:'0 auto'
      },
      index:{
        fontWeight:'blod',
        fontSize:'36px',
        color:'#E91E63',
        backgroundColor:'#3de1ad',
        textAlign:'center',
        margin:'10px auto',
        borderRadius:'8px'
      },
      num:{
        lineHeight:'60px',
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        border: '2px solid #fff',
        display:'block',
        fontSize:'20px',
        margin:'0 auto',
        color:'#fff'
      },
      title:{
        fontSize:'22px',
        color:'#455A64',
        marginLeft:'20px'
      },
      desc:{
        fontSize:'16px',
        textIndent:'10px'
      }

    }
    let address = `item/${this.props.url}`
    return(
      <div style = {styles.root}>
      <div><p style = {styles.index}><span style={styles.num}>{this.props.index}</span></p></div>
      <div>
        <p style = {styles.title}>{this.props.title}</p>
        <p style = {styles.desc}>{this.props.desc}</p>
        <Link to = {address} className = "blog-btn" >更多</Link>
        <a  className = "blog-btn" href = {this.props.hf} >more</a>
      </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:'这里是标题',
  desc:'这里是介绍'
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
export default BlogCard;
