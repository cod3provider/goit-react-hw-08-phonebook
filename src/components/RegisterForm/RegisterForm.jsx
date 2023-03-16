import { useDispatch } from 'react-redux';

import TextField from '../TextField/TextField';

import useForm from '../../hooks/useForm';

import fields from './fields';
import initialState from './initialState';
import { signup } from '../../redux/auth/auth-operations';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signup(data));
  };

  const {state, handleChange, handleSubmit} = useForm({
    initialState,
    onSubmit,
  });
  const {name, email, password} = state;

  return (
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
        <TextField value={email} handleChange={handleChange} {...fields.email} />
        <TextField value={password} handleChange={handleChange} {...fields.password} />
        <button className={s.button} type="submit">Register</button>
      </form>
  )
}

export default RegisterForm;
