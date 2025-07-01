export interface User {
  id: string;
  email: string;
  name: string;
  role: 'intended_parent' | 'surrogate' | 'admin';
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: SignupData) => Promise<boolean>;
  isLoading: boolean;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role: 'intended_parent' | 'surrogate';
}

export interface NavigationItem {
  name: string;
  href: string;
  protected?: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}