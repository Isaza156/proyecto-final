import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/LayoutComponent';

import Splash from './components/SplashComponent';
import Intro from './components/IntroComponent';
import SignIn from './components/SignInComponent';
import Login from './components/LoginComponent';
import Principal from './components/PrincipalComponent';
import Account from './components/AccountComponent';
import Confirm from './components/ConfirmComponent';
import Router from './components/RouterComponent';
import Tracing from './components/TracingComponent';
import Driver from './components/DriverComponent';
import NotFound from './components/NotFoundComponent';

const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Switch>
           <Route exact path = "/" component={Splash} />
           <Route exact path = "/intro" component={Intro} />
           <Route exact path = "/signIn" component={SignIn} />
           <Route exact path = "/login" component={Login} />
           <Route exact path = "/principal" component={Principal} />
           <Route exact path = "/account" component={Account} />
           <Route exact path = "/confirm" component={Confirm} />
           <Route exact path = "/router" component={Router} />
           <Route exact path = "/tracing" component={Tracing} />
           <Route exact path = "/driver" component = {Driver} />
           <Route component={NotFound} /> 
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;