import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={

          <RequireAuth>
            <Home></Home>
          </RequireAuth>

        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
