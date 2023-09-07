import React, { useState, useEffect } from 'react';
import { Container, Title, InputSpace, Button, Header, Text, Underline, Inputs, SubmitContainer, Input, LoginIcon } from './login.styles.ts';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './login.styles.css';
import { BsFillPersonFill, BsEnvelopeFill, BsFillLockFill } from "react-icons/bs";

function Login() {
  const [action, setAction] = useState('Login');


  return (
    <Container>
      <Header>
        <Title>{action}</Title>
        <Underline></Underline>
      </Header>
      <Inputs>
        {action==='Login'?<div></div>:
          <InputSpace>
          <LoginIcon />
          <Input placeholder='Name' type='text'></Input>
        </InputSpace>}
        <InputSpace>
          <BsEnvelopeFill className='icon'/>
          <Input placeholder='Email' type='email'></Input>
        </InputSpace>
        <InputSpace>
          <BsFillLockFill className='icon'/>
          <Input placeholder='Password' type='password'></Input>
        </InputSpace>
      </Inputs>
      {action==='Sign Up'?<div></div>:
        <Text>Forgot password?<span style={{color: 'black', cursor: 'pointer'}}> Click here!</span></Text>}
      <SubmitContainer>
        <Button backgroundColor={action === 'Login' ? 'gray' : ''} onClick={()=>{setAction('Sign Up')}}>Sign Up</Button>
        <Button backgroundColor={action === 'Sign Up' ? 'gray' : ''} onClick={()=>{setAction('Login')}}>Login</Button>
      </SubmitContainer>
    </Container>

  );
}

export default Login;