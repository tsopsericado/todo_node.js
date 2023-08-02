
import { useState } from 'react';
import ToDo from './components/ToDo';



function App() {

const [toDo, setToDo] = useState([]);

  
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos..." />
          <div className="add">ADD</div>
        </div>
        <div className="list">
          {ToDo.map((item) => <ToDo key={item._id} text={item.text} />)} 
        </div>
      </div>
    </div>
  );
}

export default App;
