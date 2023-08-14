import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import NavNotUser from '../components/NavNotUser';

export default function AuthLayout() {
  const { user } = useSelector(state => state.auth);
  return (
    <>
      {!user ? <NavNotUser /> : <Nav />}
      {/* <Nav /> */}

      <Outlet />
    </>
  );
}
