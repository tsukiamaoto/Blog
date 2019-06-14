import React from 'react';
const Content = ({content,updateContent}) => {
  return(
    <div>
      <h5>內容：</h5>
      <textarea 
        className = 'input-content' 
        type="text"
        onChange={updateContent}>
      {content}
      </textarea>
      <br/>
    </div>
  )
};
export default Content;
