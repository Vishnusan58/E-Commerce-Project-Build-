export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  stockQuantity: number;
  imageUrl?: string;
  averageRating: number;
  totalReviews: number;
}
