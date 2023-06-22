import React from 'react';
import style from './App.module.css';
import InputPrice from './components/inputPrice/InputPrice';

function App() {
  return (
    <div className={style.App}>
      <h2 className={style.title}>Цена</h2>
      <InputPrice />
    </div>
  );
}

export default App;
