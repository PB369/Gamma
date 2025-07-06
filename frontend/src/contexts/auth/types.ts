export type AuthContextType = {
  isAuthenticated: boolean;
  signIn: () => void;
  logout: () => void;
}