import React, {Suspense,useContext} from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import { Redirect, Router } from '@reach/router';
import HomePage from './components/home/Home'; 
import User from './components/user/User';
import NewUser from './components/user/NewUser';
import { AppContext } from './AppContext';
import MyProfile from './components/user/myprofile';


export const App = () => {
  
  const { isAuth  } = useContext(AppContext);
  console.log(isAuth);
  return(
    <Suspense fallback={<div/>}>
          <Router>
            {isAuth && <HomePage path="/home"/>}
            {isAuth && <MyProfile path="/myprofile"/>}
            {!isAuth && <User path="/"/>}
            {!isAuth && <NewUser path="/newuser"/>}
          </Router>
          <NavBar/>
      </Suspense>
  )
};