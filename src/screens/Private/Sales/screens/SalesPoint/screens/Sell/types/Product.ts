export default interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  formattedPrice: string;
  amount: number;
  image_url: string;
}
