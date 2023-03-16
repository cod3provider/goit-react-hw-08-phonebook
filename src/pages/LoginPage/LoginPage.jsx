// import { useDispatch, useSelector } from 'react-redux';
// import { isUserLogin } from '../../redux/auth/auth-selectors';
//
// import { login } from '../../redux/auth/auth-operations';
// import { Navigate } from 'react-router-dom';




const LoginPage = () => {
  // const isLogin = useSelector(isUserLogin);
  // const dispatch = useDispatch();
  //
  // const handleLogin = (data) => {
  //   dispatch(login(data));
  // }
  //
  // if(isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage;
