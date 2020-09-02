import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import MyProfile from './views/MyProfile/MyProfile';
import AppAppBar  from './views/AppAppBar/AppAppBar';
import AppFooter from './views/AppFooter/AppFooter';
import NotFound from './views/NotFound/NotFound';
import { AuthenticationManger, withAuth } from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
     <AppAppBar />
     <AuthenticationManger>
      
      <Switch>
        <PrivateRoute exact permissions={['admin']}  path="/"  component={MyProfile} />
        <Route exact path="/signin"  component={withAuth(SignIn)} />
        <Route exact path="/signup"  component={SignUp} />
        <Route path="/*"  component={NotFound} />
      </Switch>
      <AppFooter />
      </AuthenticationManger>
    </BrowserRouter>
  );
}


