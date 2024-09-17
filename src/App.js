
import './App.css';
import React from 'react';
import MyComponent from './component1';
import Header from './component2';
import TaskList from './component3';
import Footer from './component6';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <Header />
        <TaskList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
