import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Title, InputSpace, Button, Header, Text, Underline, Inputs, 
SubmitContainer, Input, PersonIcon, EnvelopeIcon, LockIcon } from './login.styles.ts';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestToken, postSession } from '../../api/services.ts';
import { setToken } from '../../slices/authSlice.ts';

function Login() {
  const [action, setAction] = useState('Login');
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [postLogin, setPostLogin] = useState('');
  const [apiError, setApiError] = useState('');
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenInStore = useSelector((state) => state.auth.token);
  console.log('tokenInStore', tokenInStore);

  const handleUserChange = (event) => {
    setUserValue(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const executeLogin = async () => {
    try {
      const loginTokenResponse = await getRequestToken();
      
      const loginToken = loginTokenResponse?.data?.request_token;

      const loginResponse = await postSession(userValue, passwordValue, loginToken);

      console.log('loginResponse', loginResponse);

      setPostLogin(loginResponse);
      dispatch(setToken(loginResponse?.data?.request_token));

      /* localStorage.setItem(
        'loggedUser', JSON.stringify(loginResponse)
      ); */

    } catch (error) {
      setApiError(error?.response?.data?.status_message);
      console.log(error?.response?.data?.status_message);
      //console.log(JSON.stringify(error));
    }
  }

  
  /* const success = () => {
    if (postLogin?.status === 200){
      navigate('/home');
    } else{
      console.log("Error");
    }
  } */

  const handleLoginClick = () => {
    if (action === 'Login') {
      executeLogin();
      //navigate("/home");
    } else {
      setAction('Login');
    }
  }

  useEffect(() => {
    if (postLogin?.status === 200){
      navigate('/home');
      localStorage.setItem('token', JSON.stringify(postLogin?.data?.request_token));
    } else if(postLogin?.status === 400 || postLogin?.status === 401){
      navigate('/');
      console.log("Error");
    }
  }, [postLogin?.status]);

  useEffect(() => {
    const logUser = localStorage.getItem('token');
    if (logUser) {
      setLoggedUser(logUser);
      if (loggedUser) {
        navigate('/home');
      } else {
        navigate('/');
      }
    }
  }, [loggedUser]);

  /* useEffect(() => {
    if(success){
      navigate('/home');
    }
  }, [success]); */

  return (
    <Container>
      <Header>
        <Title>{action}</Title>
        <Underline></Underline>
      </Header>
      <Inputs>
        {action==='Login'?<div></div>:
          <InputSpace>
          <EnvelopeIcon />
          <Input placeholder='Email' type='email'></Input>
        </InputSpace>}
        <InputSpace>
          <PersonIcon className='icon'/>
          <Input placeholder='Username' type='text' onChange={handleUserChange}></Input>
        </InputSpace>
        <InputSpace>
          <LockIcon className='icon'/>
          <Input placeholder='Password' type='password' onChange={handlePasswordChange}></Input>
        </InputSpace>
      </Inputs>
      {action==='Sign Up'?<div></div>:
        <Text>Forgot password?<span style={{color: 'black', cursor: 'pointer'}}> Click here!</span></Text>}
      <SubmitContainer>
        <Button backgroundColor={action === 'Login' ? 'gray' : ''} onClick={()=>{setAction('Sign Up')}}>Sign Up</Button>
        <Button backgroundColor={action === 'Sign Up' ? 'gray' : ''} onClick={handleLoginClick}>Login</Button>
      </SubmitContainer>
      <p>{apiError}</p>
    </Container>
  );
}

export default Login;