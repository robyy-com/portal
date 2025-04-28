export interface Category {
  cat_id: number;
  categoryName: string;
  categoryImg?: string;
  categorySlug?: string;
  totalProd?: number;
}

export interface ProductDetails {
  longDescription: string;
  reviews: string | null;
  shippingDelivery: string;
  productHistory: string;
}

export interface ProductImage {
  id: number;
  productImageUrl: string;
  isDefault: boolean;
}

export interface Product {
  Id: number;
  sku: string;
  isStock: boolean;
  title: string;
  productSlug: string;
  stockQuantity: number;
  description: string;
  proImage: string;
  country: string;
  category: string;
  brand: string;
  group: string;
  previousPrice: number;
  salesPrice: number;
  discountRate: number;
  size: string;
  quantity: number;
  ratingRate: number;
  ratingCount: number;
  brandSlug: string;
  categorySlug: string;
  stockAvailable: boolean;
  details?: ProductDetails[];
  images?: ProductImage[];
  totalPrice: number;
}
export interface Blog {
  id: string;
  authorName: string;
  title: string;
  description: string;
  image: string;
  date: string;
  thumbImg: string;
  postSlug: string;
  postTitle: string;
  postDetails: string;
  postedBy: string;
  postDateTime: string;
  likeCount: string;
}

export interface AddsType {
  adsCaption: string;
  imgSource: string;
  navigateURL: string;
  altText: string;
  className?: string;
}

export interface BannerType {
  sliderCaption: string;
  imgSource: string;
  navigateURL: string;
  altText: string;
  className?: string;
}

export interface User {
  partyName?: string;
  mobileNo: string;
  address?: string;
}

export interface Brand {
  brandId: number;
  brandSlug?: string;
  brandName: string;
  brandImg?: string;
  totalProd?: number;
}
