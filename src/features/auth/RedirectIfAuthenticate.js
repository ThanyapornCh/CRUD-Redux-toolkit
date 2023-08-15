import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RedirectIfAuthenticate({ children }) {
  const { user } = useSelector(state => state.auth);
  if (user) {
    return <Navigate to={'/'} />;
  }
  return children;
}
