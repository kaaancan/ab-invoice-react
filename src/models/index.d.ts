import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PriceMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type ProductMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type CustomerMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type AddressMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type InvoiceIssuerCompanyMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class Price {
  readonly id: string;
  readonly price: number;
  readonly productID: string;
  readonly customerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;

  constructor(init: ModelInit<Price, PriceMetaData>);

  static copyOf(
    source: Price,
    mutator: (
      draft: MutableModel<Price, PriceMetaData>
    ) => MutableModel<Price, PriceMetaData> | void
  ): Price;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly Prices?: (Price | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;

  constructor(init: ModelInit<Product, ProductMetaData>);

  static copyOf(
    source: Product,
    mutator: (
      draft: MutableModel<Product, ProductMetaData>
    ) => MutableModel<Product, ProductMetaData> | void
  ): Product;
}

export declare class Customer {
  readonly id: string;
  readonly companyName: string;
  readonly ownerName: string;
  readonly Address?: Address | null;
  readonly Prices?: (Price | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly customerAddressId?: string | null;

  constructor(init: ModelInit<Customer, CustomerMetaData>);

  static copyOf(
    source: Customer,
    mutator: (
      draft: MutableModel<Customer, CustomerMetaData>
    ) => MutableModel<Customer, CustomerMetaData> | void
  ): Customer;
}

export declare class Address {
  readonly id: string;
  readonly street: string;
  readonly number: string;
  readonly zip: string;
  readonly city: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;

  constructor(init: ModelInit<Address, AddressMetaData>);

  static copyOf(
    source: Address,
    mutator: (
      draft: MutableModel<Address, AddressMetaData>
    ) => MutableModel<Address, AddressMetaData> | void
  ): Address;
}

export declare class InvoiceIssuerCompany {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly taxId: string;
  readonly Address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly invoiceIssuerCompanyAddressId?: string | null;

  constructor(
    init: ModelInit<InvoiceIssuerCompany, InvoiceIssuerCompanyMetaData>
  );

  static copyOf(
    source: InvoiceIssuerCompany,
    mutator: (
      draft: MutableModel<InvoiceIssuerCompany, InvoiceIssuerCompanyMetaData>
    ) => MutableModel<InvoiceIssuerCompany, InvoiceIssuerCompanyMetaData> | void
  ): InvoiceIssuerCompany;
}
