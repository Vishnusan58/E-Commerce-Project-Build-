export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  priceAtPurchase: number;
}

export interface Order {
  id: number;
  totalAmount: number;
  discountAmount: number;
  deliveryCharge: number;
  finalAmount: number;
  orderStatus: string;
  paymentStatus: string;
  orderDate: string;
  deliveryDate?: string;
  items: OrderItem[];
}
