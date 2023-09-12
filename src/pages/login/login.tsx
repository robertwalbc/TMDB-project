import React, { useState, useEffect } from 'react';
import { Container, Title, InputSpace, Button, Header, Text, Underline, Inputs, 
SubmitContainer, Input, PersonIcon, EnvelopeIcon, LockIcon } from './login.styles.ts';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getRequestToken, postSession } from '../../api/services.ts';

function Login() {
  const [action, setAction] = useState('Login');
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

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

      const postLogin = await postSession(userValue, passwordValue, loginToken);
      
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  const handleLoginClick = () => {
    if (action === 'Login') {
      executeLogin();
    } else {
      setAction('Login');
    }
  }

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
    </Container>
  );
}

export default Login;