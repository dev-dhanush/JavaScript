import logo from './logo.svg';
import './App.css';
import Hoc from './Components/hoc';  

function App() {
  return (
    <div className="App">
       <div>  
        <h2>this is from app</h2>  
      </div>  
    </div>
  );
}
App = Hoc(App);  
export default App;
