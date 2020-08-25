import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import MyProfile from './views/MyProfile/MyProfile';
import AppAppBar  from './views/AppAppBar/AppAppBar';
import AppFooter from './views/AppFooter/AppFooter';

export default function App() {
  return (
    <BrowserRouter>
      <AppAppBar />
      <Switch>
        <Route exact path="/">
           <MyProfile />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
         <SignUp />
        </Route>
      </Switch>
      <AppFooter />
    </BrowserRouter>
  );
}


