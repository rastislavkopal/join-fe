export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/* --- STATE --- */
export interface LandingPageState {
  users: User[];
  loading: boolean;
  error: any;
}
