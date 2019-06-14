import React, {useState} from 'react';
import Title from './inputTitle';
import Content from './inputCotent';
import '../css/addComment.css';
import { Link } from'react-router-dom';

const Post = props => {
  
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const handleTitleChanged = event => { setTitle(event.target.value)}
  const handleContentChanged = event => { setContent(event.target.value)}
  const handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.data)
  }
  const handleClear = () => {
    setTitle()
    setContent()
  }
  return (
    <div>
      <div className = 'title'>
        <strong>Blogs</strong>
        <hr size="2px"  width="100%"></hr>
      </div>
      <div className = 'content-post'>              
        <Title title={title} updateTitle={handleTitleChanged}/>
        <Content content={content} updateContent={handleContentChanged}/>
        <div className= 'content-button'>
          <button><Link to="/" className="linkButton">返回</Link></button>
          <div className = 'option'>
            <button className = "ok" disabled={!(title && content)} onClick={handleSubmit}>完成</button>       
            <button className = "cancel" onClick={handleClear}>清空</button>
          </div>
        </div>                    
      </div>
    </div>
  );
};

export default Post;