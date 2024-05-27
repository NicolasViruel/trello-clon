export interface Product {
    id: string;
    title: string;
    price: number;
    images: string[]; //un producto tiene muchas imagenes como galeria
  }