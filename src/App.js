import './App.css';
import {Routes, Route} from 'react-router-dom'
import Test from './Pages/Test'
import Home from './Pages/Home';
import Login from './Pages/login'
import Register from './Pages/Register'
 
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

      </Routes>
    </div>
 
  );
}

export default App;
