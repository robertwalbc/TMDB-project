import styled from 'styled-components';
import { BsFillPersonFill, BsEnvelopeFill, BsFillLockFill } from "react-icons/bs";

export const LoginIcon = styled(BsFillPersonFill)`
  margin: 0 30px;
  color: #676767;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 200px;
  width: 600px;
  background: #fff;
  padding-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const Text = styled.div`
  margin-top: 27px;
  color: #797979;
  font-size: 18px;
`;

export const Underline = styled.div`
  width: 61px;
  height: 6px;
  background: #000;
  border-radius: 9px;
  margin-top: -25px;
`;

export const Inputs = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 60px auto;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

export const InputSpace = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #eaeaea;
  border-radius: 6px;
`;

export const Input = styled.input`
  height: 50px;
  width: 400px;
  background: transparent;
  border: none;
  outline: none;
  color: #797979;
  font-size: 19px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: ${({backgroundColor})=> backgroundColor === 'gray' ? '#676767' : '#fff'};
  background: ${({backgroundColor})=> backgroundColor === 'gray' ? '#eaeaea' : '#006633'};
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  border: none;
`;
