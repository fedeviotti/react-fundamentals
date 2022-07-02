// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    // window.console.dir(event.target);
    // const value = event.target.elements.username.value;
    // window.console.dir(inputRef.current);
    // const value = inputRef.current.value;
    onSubmitUsername(username);
  };

  const handleChange = (event) => {
    const {value} = event.target;
    // window.console.log(value);
    setUsername(value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
