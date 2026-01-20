export interface CartItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
  total: number;
}
