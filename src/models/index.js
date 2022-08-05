// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Invoice, Customer, Address, Price, Product, InvoiceIssuerCompany } =
  initSchema(schema);

export { Invoice, Customer, Address, Price, Product, InvoiceIssuerCompany };
