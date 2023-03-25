import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import "./style.scss"
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Redirect to="/login" />
    }
    return children
  }


  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact>
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>

        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
