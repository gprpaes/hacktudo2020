import React from 'react';

import { useAuth } from '../hooks/Auth';

import Auth from './Auth.routes';
import App from './App.routes';

const Routes = () => {
  const { user } = useAuth();

  return <Auth />;
};

export default Routes;