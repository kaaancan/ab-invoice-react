import { Customer, Product } from "../API";

export interface InvoiceCreateProps {
  startDate: Date;
  endDate: Date;
  customers: Customer[];
  products: Product[];
}
