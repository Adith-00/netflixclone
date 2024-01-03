import React from 'react';


const ErrorDialog = ({closeFun}) => {
  return (
    <div className="error-dialog">
      <div className="error-header">
        <i className='close-button' onClick={closeFun}><span class="material-symbols-outlined">close</span></i> 
      </div>
      <div className="error-content">
        <h2>Error</h2>
        <p>Invalid username or password. Please try again.</p>
      </div>
    </div>
  );
};

export default ErrorDialog;
