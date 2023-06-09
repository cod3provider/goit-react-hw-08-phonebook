import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Wait, loading...</p>} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route >
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
