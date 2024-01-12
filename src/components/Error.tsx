
import React from 'react';

const Error: React.FC = () => {
    setTimeout(() => {
        window.location.href = "/"
    }, 3000);
    
  return (
    <div className="Error">
        An error occured, redirecting home...
    </div>
  );
};

export default Error;