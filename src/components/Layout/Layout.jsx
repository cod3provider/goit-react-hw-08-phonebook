import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
