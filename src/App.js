import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import todo from './Components/todo';
import Todo from './Components/todo';
function App() {
  return (
    <div className="App">
     <Counter initialValue={1000}/>
     <Todo/>
    
    </div>
    
  );
}

export default App;
