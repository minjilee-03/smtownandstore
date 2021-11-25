import React from 'react';

import Header from "../component/header";
import LoginForm from "../component/login_form";


const bg = {
    backgroundColor : "#f2f2f2"
};


const Login_page = () => {
  return(
      <div className="logon-section">
          <Header/>
          <LoginForm/>
      </div>
  );
}
export default Login_page;