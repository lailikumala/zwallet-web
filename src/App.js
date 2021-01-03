import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { PrivateRoute, PublicRoute } from "./components";
import { 
  LandingPage, 
  Login, 
  SignUp, 
  ResetPassword, 
  Home, 
  HistoryTransfer,
  TransferSearch, 
  TransferAmount, 
  TransferConfirmation, 
  TransferStatus,
  Topup, 
  Profile, 
  PersonalInformation, 
  AddPhone,
  ChangePassword,
  ChangePin,
  ManagePhone,
 
} from "./page";
import configureStore from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


const Routes = () => {
  return(
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Home} />
        <PrivateRoute exact path="/dashboard/history" component={HistoryTransfer} />
        <PrivateRoute exact path="/transfer" component={TransferSearch} />
        <PrivateRoute exact path="/topup" component={Topup} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/personal_information" component={PersonalInformation} />
        <PrivateRoute exact path="/profile/manage_phone" component={ManagePhone} />
        <PrivateRoute exact path="/profile/add_phone" component={AddPhone} />
        <PrivateRoute exact path="/profile/change_password" component={ChangePassword} />
        <PrivateRoute exact path="/profile/change_pin" component={ChangePin} />
        <PrivateRoute component={TransferAmount} path='/transfer/amount' />
        <PrivateRoute component={TransferConfirmation} path='/transfer/confirmation' />
        <PrivateRoute component={TransferStatus} path='/transfer/status' />
        <PublicRoute component={LandingPage} restricted={false} path='/' exact />
        <PublicRoute component={Login} restricted={true} path='/login' />
        <PublicRoute component={SignUp} restricted={true} path='/signup' />
        <PublicRoute component={ResetPassword} restricted={true} path='/reset_password' />
        
      </Switch>
    </Router>
  )
};

//configuration
const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
