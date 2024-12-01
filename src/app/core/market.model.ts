export interface SectionModel {
  sectionName: string;
  sectionType: string;
  products: ProductModel[];
}

export interface Markets {
  [key: string]: SectionModel[];
}

export interface ProductModel {
  id?: number;
  productName: string;
  section?: string;
}
