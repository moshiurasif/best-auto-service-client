import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Navbar from './Components/SharedComponents/Navbar/Navbar';
import Footer from './Components/SharedComponents/Footer/Footer';
import OrderPage from './Components/OrderPage/OrderPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Navbar></Navbar>
          <Login></Login>
          <Footer></Footer>
        </Route>
        <PrivateRoute path="/order">
          <OrderPage></OrderPage>
        </PrivateRoute>
        <Route path="*">
          <Navbar />
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
