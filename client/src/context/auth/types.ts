import { User } from 'polario-common';

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User;
  error?: string;
  login?: () => void;
  logout?: () => void;
}
