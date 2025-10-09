import {  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import AppRoutes from './navigation/Routes';
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
