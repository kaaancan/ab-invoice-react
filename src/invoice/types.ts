import { Customer, Product } from "../API";
import { Dayjs } from "dayjs";

export interface InvoiceCreateProps {
  startDate: Dayjs;
  endDate: Dayjs;
  customers: Customer[];
  products: Product[];
}
