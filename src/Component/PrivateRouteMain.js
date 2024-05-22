import { useState } from "react";
import { useAuth } from "./useAuth"
import { useNavigate,useLocation } from 'react-router-dom';

export const PrivateRouteMain = () => {
  const { state } = useLocation();  
  useAuth(state['user'], state['pass']);
}
