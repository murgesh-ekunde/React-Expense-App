import './App.css';
import {Routes, Route} from 'react-router-dom'
import Test from './Pages/Test'
import Home from './Pages/Home';
 
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </div>
 
  );
}

export default App;
