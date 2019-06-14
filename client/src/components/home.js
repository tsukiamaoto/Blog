import React,{ useEffect } from'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import '../css/home.css';

const Home = props => {
  const {loading, error, posts } = props
  useEffect(() => {
    if(loading)
      props.loadPage()
  })
  if(loading){
      return <span>Loading...</span>
  } else if (error){
      return <span>Error:{error}</span>
  } else {
    return (
      <div>
        <div className = "title">
          <strong>Blogs</strong><hr/>
      </div>
      <div className = "content">
      <button className= 'add'><Link to="/post" className="link">新增</Link></button>                    
        <table className = 'table-data'>
          <tr>
            <th>日期</th>
            <th>標題</th>
            <th>作者</th>
          </tr>
          { posts.map(post => (
            <tr key={post._id}>
              <td>{post.update}</td>
              <td><Link to={`/article/${post._id}`}>{post.title}</Link></td>
              <td>{post.author}</td>
            </tr>
          ))}                 
        </table>             
        </div>
      </div>
    );
  }
  
};

export default connect(
  (state, props) => ({
    loading: state.commentList.loading ,
    error: state.commentList.error ,
    posts: state.commentList.posts,
  }),
  (dispatch) => ({
    loadPage: () => dispatch(actions.fetchAllPosts())
  })
)(Home);
