export type AuthContextType = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}