'use client';

import React, { PropsWithChildren, useContext } from 'react';
import { client } from '@/lib/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { LOGIN_MUTATION } from './api/login';

export interface Auth {
  isLoading: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<Auth>({
  isLoading: false,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const login = async (username: string, password: string) => {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { username, password },
    });
    localStorage.setItem('token', data?.login.token ?? '');
  };

  const logout = () => {
    localStorage.removeItem('token');
    client.resetStore();
  };

  const token = localStorage.getItem('token');

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading: false,
        isAuthenticated: !!token,
      }}
    >
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthContext.Provider>
  );
};
