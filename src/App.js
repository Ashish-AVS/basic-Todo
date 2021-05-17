import './App.css';

import "antd/dist/antd.css";
import Todos from './Todos';
import NewTodo from './NewTodo';


function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        Todo List
      </nav>
      <NewTodo />
    </div>
  );
}

export default App;
