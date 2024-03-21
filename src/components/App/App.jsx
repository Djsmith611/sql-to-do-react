import {useState} from 'react';

function App () {
  
  return (
    <div className='app'>
      <header>
        <h1>TO DO APP</h1>
      </header>
      <main>
        <form>
          <h3>Add a task</h3>
          <input type="text" placeholder='Task' />
        </form>
        <h2>Tasks</h2>
        <ul>

        </ul>
      </main>
      <footer>

      </footer>
    </div>
  );

}

export default App
