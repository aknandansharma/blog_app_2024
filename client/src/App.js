import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <>
      <Navbar/>
      <Login/>
      <Register/>
    </>
  );
}

export default App;
