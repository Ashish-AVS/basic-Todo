import './App.css';
import "antd/dist/antd.css";
import NewTodo from './NewTodo';
import NavBar from './components/NavBar'
import firebase from './utils/firebase';
import React, {useEffect, useState} from 'react';
import socialMediaAuth from './service/auth';
import { facebookProvider, githubProvider, googleProvider } from './config/authMethods';
import ErrorLogs from './components/ErrorLogs'
import {Button, Space} from 'antd'
import {FacebookOutlined, GoogleOutlined, GithubOutlined} from '@ant-design/icons';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authData, setAuthData] = useState({});

  const handleAuth = async (provider) => {
    const res = await socialMediaAuth(provider);
    // console.log(res);
    setAuthData(prevState => res);

    if(res===null || res.a===null){
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true)
    }
  }
 

  return (
    <div className="App">
      <nav>
        <NavBar authData={authData}/>
      </nav>
      {!isLoggedIn?
        <div className="login-form">
          <Space direction="vertical" size="small">
          <Button type = "primary" 
          className="btn-styles" 
          onClick={() => handleAuth(facebookProvider)}>

          <FacebookOutlined/>Facebook</Button>
          <br />
          <Button type = "primary" 
          className="btn-styles" 
          onClick={() => handleAuth(googleProvider)}>

          <GoogleOutlined/>Google</Button>
          <br />
          <Button type = "primary" 
          className="btn-styles" 
          onClick={() => handleAuth(githubProvider)}>

          <GithubOutlined/>Github</Button>

          </Space>
        </div>
      :null}
      {isLoggedIn?<NewTodo authData={authData} />:<ErrorLogs message = {authData} show={true}/>}
    </div>
  );
}

export default App;
