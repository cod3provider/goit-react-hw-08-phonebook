// import {useDispatch, useSelector} from 'react-redux';
// import { Navigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

// import { signup } from '../../redux/auth/auth-operations';
// import { isUserLogin } from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  // const dispatch = useDispatch();
  // const isLogin = useSelector(isUserLogin);
  // const handleSignup = (data) => {
  //   dispatch(signup(data));
  // }
  //
  // if (isLogin) {
  //   return <Navigate to="/contacts" />
  // }

  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage;
