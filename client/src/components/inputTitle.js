import React from'react';
const Title = ({title, updateTitle}) => {
  return (
    <div>
        <h5>標題：</h5>
        <textarea 
          className = 'input-title' 
          type="text"
          onChange={updateTitle}>
            {title}
        </textarea>    
    </div>
  );
}
export default Title;
