import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function OnlyNovinarPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isNovinar ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}