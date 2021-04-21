import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/SharedComponents/Navbar/Navbar";
import Footer from "./Components/SharedComponents/Footer/Footer";
import OrderPage from "./Components/OrderPage/OrderPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import AddReview from "./Components/AddReview/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddService from "./Components/AddService/AddService";
import OrderList from "./Components/Dashboard/OrderLlist/OrderList";
import AdminOrderList from "./Components/Dashboard/AdminOrderList/AdminOrderList";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import ManageService from "./Components/Dashboard/DashboardSidebar/ManageService/ManageService";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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

          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/book/:id">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderPage></OrderPage>
          </PrivateRoute>

          <Route path="/add-service">
            <AddService></AddService>
          </Route>
          <Route path="/manage-service">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/user-dashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>

          <Route path="/order-list">
            <OrderList></OrderList>
          </Route>
          <Route path="/admin-order-list">
            <AdminOrderList></AdminOrderList>
          </Route>
          <Route path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="*">
            <Navbar />
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
