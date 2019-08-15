import React from 'react';
import Splash from './components/SplashComponent';
import Intro from './components/IntroComponent';
import SignIn from './components/SignInComponent';
import Login from './components/LoginComponent';
import Principal from './components/PrincipalComponent';
import Account from './components/AccountComponent';
import Confirm from './components/ConfirmComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <React.Fragment>
     
      <Intro/>
      <Footer/>
    </React.Fragment>
  );
}
export default App;
/*
       <Splash />
      <Intro />
      <SignIn />
      <Login />
      <Principal />
      <Account />
      <Confirm />
      */