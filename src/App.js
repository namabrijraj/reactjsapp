//import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Product from './components/pages/Product'
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import { Routes, Route } from 'react-router-dom'
import { createContext, useReducer } from 'react';
import reducer from '../src/reducer/UseReducer'

export const UserContext = createContext();
function App() {

  const [state,dispatch] = useReducer(reducer, null)
  

  return (    
    <>
      <UserContext.Provider value={{state,dispatch}}>
      <Header />      
      <Routes>
        <Route path="/login" element={<Login />}>Login</Route>
        <Route path="/register" element={<Register />}>Register</Route>
      </Routes>
      <Footer />
      </UserContext.Provider>
    </>  
  );
}

export default App;
