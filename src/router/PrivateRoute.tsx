import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Preferences } from '@capacitor/preferences';
import { Routes } from './types';

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthToken = async () => {
      const { value: jwt } = await Preferences.get({ key: 'jwt' });
      setIsAuthenticated(!!jwt);
    };
    checkAuthToken();
  }, []);

  if (isAuthenticated === null) {
    // Optionally show a loading spinner here
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={Routes.ACCESO} />
      }
    />
  );
};

export default PrivateRoute;
