// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

const Box = ({size, style, className = '', children, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
      {children}
    </div>
  );
};

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>Test</Box>
    </div>
  );
}

export default App;
