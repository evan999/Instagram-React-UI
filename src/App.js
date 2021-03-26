import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile"
          alt=""
        />
      </div>

      <h1>HELLO WORLD</h1>

      <Post />
      {/* Posts */}
    </div>
  );
}

export default App;
