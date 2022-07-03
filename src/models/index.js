// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Price, Product, Customer, Address, InvoiceIssuerCompany } =
  initSchema(schema);

export { Price, Product, Customer, Address, InvoiceIssuerCompany };
