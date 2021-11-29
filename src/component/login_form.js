import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import Header from './header'

const LoginForm = () => {

    const userEail = 'test@naver.com';
    const userPassword =  '1234';


    const [account, setAccount] = useState({
        email: "",
        password: "",
    });


    const wrapStyle = {
        position : 'relative',
        width: '100%',
        zIndex: '5',
        padding: '188px 0',
        backgroundColor : "#f2f2f2"
    };

    const cc = {
        width: '600px',
        margin: '50px auto 0',
        padding: '50px 0 70px',
        border: '1px solid #d8d9de',
        backgroundColor: '#fff',
        borderRadius: '4px'
    }
    const dd = {
        position: 'relative',
        width: '100%',
        margin: '0 40px',
        padding: '0',
        border: '0',
        display:'flex'
    }

    const h1 ={
        margin:'0',
        padding: '0',
        textAlign: 'center',
        fontSize: '41px',
        fontWeight: '700',
        color: '#2d3043'
    }
    const span={
        width: '125px',
        color: '#2d2f43',
        fontSize: '14px',
        fontWight: '500',
        height: '55px',
        lineHeight: '55px',
        display: 'inline-block',
        verticalAalign: 'top'
    }
    const fild = {
        width: '395px',
        height: '54px',
        lineHeight: '54px',
        padding: '0',
        border:'0',
        borderBottom: '1px solid #d8d9df',
        color: '#444',
        fontSize: '16px',
        verticalAlign: 'top',
        outline: 'none'
    }

    const loginwrap = {
        margin: '55px auto 0'
    }

    const loginbtn = {
        height: '55px',
        width : '548px',
        backgroundColor: '#3d435f',
        color: '#fff',
        fontSize: '16px',
        fontWeight: '400',
        display: 'block',
        textAlign: 'center',
        lineHeight: '55px',
        borderRadius: '50px',
        margin: 'auto'
    }

    const navigate = useNavigate();

    const UserIdVal = (e) =>{
        console.log(account)
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });

        // setAccount((account) => (
        //     {
        //         ...account,
        //         [e.target.name]: e.target.value,
        //     }
        // ));
    };


    const Login = () => {
        if ( userEail === account.email && userPassword === account.password) {
            alert('메인으로 이동합니다');
            navigate('/');
        }
        else{
            alert('다시 시도해주세요')
        }
    }
    return (
        <div style={wrapStyle}>
            <h1 style={h1}>Login</h1>
            <div style={cc}>
                <div style={dd}>
                    <span style={span}>ID</span>
                    <input type="text"  name="email"
                           onChange={UserIdVal} style={fild}/>
                </div>
                <div style={dd}>
                    <span style={span}>PASSWORD</span>
                    <input type="text" name="password"
                           onChange={UserIdVal} style={fild}/>
                </div>
                <div style={loginwrap}>
                    <button style={loginbtn} onClick={Login}>로그인</button>
                </div>
                </div>
            </div>


    );
}


export default LoginForm;
