import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome'
import Chat from './components/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
  );
};

export default App;