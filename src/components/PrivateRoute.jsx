import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    toast.error("Please register or login first");
    return <Navigate to="/register"  state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
