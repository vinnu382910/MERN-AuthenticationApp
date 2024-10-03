import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import 'react-toastify/ReactToastify.css';
import RefreshHandler from './RefreshHandler'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PraviteRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  }
  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PraviteRoute element={<Home/>} />} />
      </Routes>
    </div>
  );
}

export default App;
