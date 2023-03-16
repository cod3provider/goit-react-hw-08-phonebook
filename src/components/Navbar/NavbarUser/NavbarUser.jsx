import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

import s from './NavbarUser.module.css';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrap}>
      <p className={s.mail}>{email}</p>,
      <button className={s.button} onClick={onLogout} type="button">Logout</button>
    </div>
  )
}

export default NavbarUser;
