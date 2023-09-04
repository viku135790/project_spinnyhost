import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignupCredentialMutation } from '../../features/signupSlice';
import "./SignupLogin.css";
import { useCreatePostForLoginMutation } from '../../features/loginSlice';


function SignupLogin() {
    const [showRegisteredContent, setShowRegisteredContent] = useState(false);
    const [showCreateAccountContent, setShowCreateAccountContent] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState('');
    const [logInStatus, setLogInStatus] = useState('');
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({})
    const [signUp, signUpResponse] = useSignupCredentialMutation();
    const [login, logInResponse] = useCreatePostForLoginMutation();


    const toggleRegisteredContent = () => {
        setShowRegisteredContent(!showRegisteredContent);
        setShowCreateAccountContent(false);
    };

    const toggleCreateAccountContent = () => {
        setShowCreateAccountContent(!showCreateAccountContent);
        setShowRegisteredContent(false);
    };





    //get data of users for signup 
    const getUsersData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };
    //calling signup api
    const handleSignUp = async () => {
        const response = await signUp(users);
    };
    useEffect(() => {
        if (signUpResponse.isLoading) {
            setSignUpStatus("pending")
        } else if (signUpResponse.isError) {
            setSignUpStatus("rejected")
        } else if (signUpResponse.isSuccess) {
            setSignUpStatus("success")
        }
    }, [signUpResponse.isLoading, signUpResponse.isError, signUpResponse.isSuccess]);



    //get data of users for login
    const getUserLogin = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };
    //calling login api
    const loginUser = async () => {
        const loginResponse = await login(loginDetails);
        const token= loginResponse?.data?.token;
        localStorage.setItem('token', token);
    };
    useEffect(() => {
        if (logInResponse.isLoading) {
            setLogInStatus("pending")
        } else if (logInResponse.isError) {
            setLogInStatus("rejected")
        } else if (logInResponse.isSuccess) {
            setLogInStatus("success")
        }
    }, [logInResponse.isLoading, logInResponse.isError, logInResponse.isSuccess]);





    return (
        <div className='check-sec-child  check-sec-img'>
            <div className='check-new-div'>
                <p className='check-sec-color'>Register</p>
                <div className='check-sec-btn'>
                    <p className='check-first-btn' onClick={toggleRegisteredContent}>Login</p>
                    <p className='check-second-btn' onClick={toggleCreateAccountContent}>Sign Up</p>
                </div>

                {showRegisteredContent && (
                    <div className='check-search-section'>
                        <p>Existing Customer Login</p>
                        <div className='check-first-cont'>
                            <input type='email' className='check-first-search' name='email' placeholder="Email Address" onChange={getUserLogin}></input>
                            <input type='password' className='check-sec-search' name='password' placeholder="Password" onChange={getUserLogin}></input>
                            <div>
                                {logInStatus}
                            </div>
                        </div>
                        <div className='com-order-details'>
                            <button onClick={loginUser}>Login</button>
                        </div>
                    </div>
                )}

                {showCreateAccountContent && (
                    <div>
                        <div className='check-signup'>
                            <p className='signup-first'>Sign up</p>
                            <p>Personal Information</p>
                        </div>

                        <div className='check-first-cont'>
                            <input type='text' className='check-first-search' placeholder="First Name" value={users.firstName} name='firstName' onChange={getUsersData}></input>
                            <input type='text' className='check-sec-search' placeholder="LastName" name='lastName' value={users.lastName} onChange={getUsersData}></input>
                            <input type='email' className='check-first-search' placeholder="Email Address" name='email' value={users.email} onChange={getUsersData}></input>
                            <input type='password' className='check-first-search' placeholder="Password" name='password' value={users.password} onChange={getUsersData}></input>
                        </div>
                        <div>
                            {signUpStatus}
                        </div>
                        <p>Biling Address</p>
                        <div className='check-first-cont'>
                            <input type='text' className='check-first-search' placeholder="Company Name(Optional)" ></input>
                            <input type='password' className='check-sec-search' placeholder="Street Address" ></input>
                            <input type='text' className='check-first-search' placeholder="Street Address 2" ></input>
                            <input type='text' className='check-first-search' placeholder="City"></input>
                        </div>

                        <div className='check-search-section'>
                            <button onClick={handleSignUp}>SIGNUP</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SignupLogin