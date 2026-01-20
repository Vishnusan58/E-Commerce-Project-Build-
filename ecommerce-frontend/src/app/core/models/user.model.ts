export interface User {
  id: number;
  email: string;
  name: string;
  role: 'CUSTOMER' | 'SELLER' | 'ADMIN';
  active: boolean;
}
