import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { AuthData } from "@/types/interfaces";

interface AuthProps {
  children: React.ReactNode;
}
interface AuthContextType {
  userData: AuthData | null;
  isSignedIn: boolean;
  signInContext: (data: AuthData) => void;
  signOutContext: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Oops");
  }
  return context;
};

export default function AuthProvider({ children }: AuthProps) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState<AuthData | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const objUser = JSON.parse(user);
      setUserData(objUser);
    }
  }, []);

  const signInContext = (data: AuthData) => {
    setIsSignedIn(true);
    setUserData(data);
  };
  const signOutContext = () => {
    setIsSignedIn(false);
    setUserData(null);
  };
  return (
    <AuthContext.Provider
      value={{ isSignedIn, userData, signInContext, signOutContext }}
    >
      {children}
    </AuthContext.Provider>
  );
}
