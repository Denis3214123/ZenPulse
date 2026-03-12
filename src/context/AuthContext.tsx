import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextValue = {
  isSubscribed: boolean;
  buySubscription: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const buySubscription = () => {
    setIsSubscribed(true);
  };

  return (
    <AuthContext.Provider value={{ isSubscribed, buySubscription }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}

export default AuthContext;
