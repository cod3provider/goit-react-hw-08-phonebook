import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';

import TextField from '../TextField/TextField';

import fields from './fields';
import initialState from './initialState';

import { login } from '../../redux/auth/auth-operations';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(login(data));
  };

  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
  const {email, password} = state;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <button className={s.button} type="submit">Login</button>
    </form>
  )
}

export default LoginForm;
