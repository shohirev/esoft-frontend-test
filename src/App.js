import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { initDatabase } from './features/tasksSlice';
import { getDatabase } from './utilities/synchronization.js';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = getDatabase();
    dispatch(initDatabase(tasks));
  }, []);

  return (
    <div className='app-container'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
