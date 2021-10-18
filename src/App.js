
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ServicesDetails from './components/ServicesDetails/ServicesDetails';
import Contact from './components/ContactUs/Contact';
import Services from './components/Home/Services/Services';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
            <PrivateRoute path="/servicesdetails/:servicesdetailsId">
            <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <PrivateRoute path="/contact">
            <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/services">
            <Services></Services>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>

          

          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
