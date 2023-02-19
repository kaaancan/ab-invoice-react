/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInvoiceEntryInput = {
  id?: string | null;
  value?: number | null;
  invoiceID: string;
  invoiceEntryProductId?: string | null;
  invoiceEntryPriceId?: string | null;
};

export type ModelInvoiceEntryConditionInput = {
  value?: ModelIntInput | null;
  invoiceID?: ModelIDInput | null;
  and?: Array<ModelInvoiceEntryConditionInput | null> | null;
  or?: Array<ModelInvoiceEntryConditionInput | null> | null;
  not?: ModelInvoiceEntryConditionInput | null;
  invoiceEntryProductId?: ModelIDInput | null;
  invoiceEntryPriceId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type InvoiceEntry = {
  __typename: "InvoiceEntry";
  id: string;
  value?: number | null;
  Product?: Product | null;
  Price?: Price | null;
  invoiceID: string;
  createdAt: string;
  updatedAt: string;
  invoiceEntryProductId?: string | null;
  invoiceEntryPriceId?: string | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name?: string | null;
  Prices?: ModelPriceConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelPriceConnection = {
  __typename: "ModelPriceConnection";
  items: Array<Price | null>;
  nextToken?: string | null;
};

export type Price = {
  __typename: "Price";
  id: string;
  price?: number | null;
  productID: string;
  customers?: ModelCustomerPriceConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCustomerPriceConnection = {
  __typename: "ModelCustomerPriceConnection";
  items: Array<CustomerPrice | null>;
  nextToken?: string | null;
};

export type CustomerPrice = {
  __typename: "CustomerPrice";
  id: string;
  priceID: string;
  customerID: string;
  price: Price;
  customer: Customer;
  createdAt: string;
  updatedAt: string;
};

export type Customer = {
  __typename: "Customer";
  id: string;
  companyName: string;
  ownerName: string;
  Address?: Address | null;
  Prices?: ModelCustomerPriceConnection | null;
  createdAt: string;
  updatedAt: string;
  customerAddressId?: string | null;
};

export type Address = {
  __typename: "Address";
  id: string;
  street: string;
  number: string;
  zip: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInvoiceEntryInput = {
  id: string;
  value?: number | null;
  invoiceID?: string | null;
  invoiceEntryProductId?: string | null;
  invoiceEntryPriceId?: string | null;
};

export type DeleteInvoiceEntryInput = {
  id: string;
};

export type CreateProductInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
};

export type DeleteProductInput = {
  id: string;
};

export type CreatePriceInput = {
  id?: string | null;
  price?: number | null;
  productID: string;
};

export type ModelPriceConditionInput = {
  price?: ModelFloatInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelPriceConditionInput | null> | null;
  or?: Array<ModelPriceConditionInput | null> | null;
  not?: ModelPriceConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePriceInput = {
  id: string;
  price?: number | null;
  productID?: string | null;
};

export type DeletePriceInput = {
  id: string;
};

export type CreateInvoiceInput = {
  id?: string | null;
  deliveryStartDate: string;
  deliveryEndDate: string;
  issueDate: string;
  invoiceNumber: number;
  invoiceCustomerId?: string | null;
};

export type ModelInvoiceConditionInput = {
  deliveryStartDate?: ModelStringInput | null;
  deliveryEndDate?: ModelStringInput | null;
  issueDate?: ModelStringInput | null;
  invoiceNumber?: ModelIntInput | null;
  and?: Array<ModelInvoiceConditionInput | null> | null;
  or?: Array<ModelInvoiceConditionInput | null> | null;
  not?: ModelInvoiceConditionInput | null;
  invoiceCustomerId?: ModelIDInput | null;
};

export type Invoice = {
  __typename: "Invoice";
  id: string;
  deliveryStartDate: string;
  deliveryEndDate: string;
  issueDate: string;
  Customer?: Customer | null;
  InvoiceEntries?: ModelInvoiceEntryConnection | null;
  invoiceNumber: number;
  createdAt: string;
  updatedAt: string;
  invoiceCustomerId?: string | null;
};

export type ModelInvoiceEntryConnection = {
  __typename: "ModelInvoiceEntryConnection";
  items: Array<InvoiceEntry | null>;
  nextToken?: string | null;
};

export type UpdateInvoiceInput = {
  id: string;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  issueDate?: string | null;
  invoiceNumber?: number | null;
  invoiceCustomerId?: string | null;
};

export type DeleteInvoiceInput = {
  id: string;
};

export type CreateCustomerInput = {
  id?: string | null;
  companyName: string;
  ownerName: string;
  customerAddressId?: string | null;
};

export type ModelCustomerConditionInput = {
  companyName?: ModelStringInput | null;
  ownerName?: ModelStringInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
  customerAddressId?: ModelIDInput | null;
};

export type UpdateCustomerInput = {
  id: string;
  companyName?: string | null;
  ownerName?: string | null;
  customerAddressId?: string | null;
};

export type DeleteCustomerInput = {
  id: string;
};

export type CreateAddressInput = {
  id?: string | null;
  street: string;
  number: string;
  zip: string;
  city: string;
};

export type ModelAddressConditionInput = {
  street?: ModelStringInput | null;
  number?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelAddressConditionInput | null> | null;
  or?: Array<ModelAddressConditionInput | null> | null;
  not?: ModelAddressConditionInput | null;
};

export type UpdateAddressInput = {
  id: string;
  street?: string | null;
  number?: string | null;
  zip?: string | null;
  city?: string | null;
};

export type DeleteAddressInput = {
  id: string;
};

export type CreateInvoiceIssuerCompanyInput = {
  id?: string | null;
  name: string;
  phone: string;
  taxId: string;
  invoiceIssuerCompanyAddressId?: string | null;
};

export type ModelInvoiceIssuerCompanyConditionInput = {
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  and?: Array<ModelInvoiceIssuerCompanyConditionInput | null> | null;
  or?: Array<ModelInvoiceIssuerCompanyConditionInput | null> | null;
  not?: ModelInvoiceIssuerCompanyConditionInput | null;
  invoiceIssuerCompanyAddressId?: ModelIDInput | null;
};

export type InvoiceIssuerCompany = {
  __typename: "InvoiceIssuerCompany";
  id: string;
  name: string;
  phone: string;
  taxId: string;
  Address?: Address | null;
  createdAt: string;
  updatedAt: string;
  invoiceIssuerCompanyAddressId?: string | null;
};

export type UpdateInvoiceIssuerCompanyInput = {
  id: string;
  name?: string | null;
  phone?: string | null;
  taxId?: string | null;
  invoiceIssuerCompanyAddressId?: string | null;
};

export type DeleteInvoiceIssuerCompanyInput = {
  id: string;
};

export type CreateCustomerPriceInput = {
  id?: string | null;
  priceID: string;
  customerID: string;
};

export type ModelCustomerPriceConditionInput = {
  priceID?: ModelIDInput | null;
  customerID?: ModelIDInput | null;
  and?: Array<ModelCustomerPriceConditionInput | null> | null;
  or?: Array<ModelCustomerPriceConditionInput | null> | null;
  not?: ModelCustomerPriceConditionInput | null;
};

export type UpdateCustomerPriceInput = {
  id: string;
  priceID?: string | null;
  customerID?: string | null;
};

export type DeleteCustomerPriceInput = {
  id: string;
};

export type ModelInvoiceEntryFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelIntInput | null;
  invoiceID?: ModelIDInput | null;
  and?: Array<ModelInvoiceEntryFilterInput | null> | null;
  or?: Array<ModelInvoiceEntryFilterInput | null> | null;
  not?: ModelInvoiceEntryFilterInput | null;
  invoiceEntryProductId?: ModelIDInput | null;
  invoiceEntryPriceId?: ModelIDInput | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type ModelPriceFilterInput = {
  id?: ModelIDInput | null;
  price?: ModelFloatInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelPriceFilterInput | null> | null;
  or?: Array<ModelPriceFilterInput | null> | null;
  not?: ModelPriceFilterInput | null;
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null;
  deliveryStartDate?: ModelStringInput | null;
  deliveryEndDate?: ModelStringInput | null;
  issueDate?: ModelStringInput | null;
  invoiceNumber?: ModelIntInput | null;
  and?: Array<ModelInvoiceFilterInput | null> | null;
  or?: Array<ModelInvoiceFilterInput | null> | null;
  not?: ModelInvoiceFilterInput | null;
  invoiceCustomerId?: ModelIDInput | null;
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection";
  items: Array<Invoice | null>;
  nextToken?: string | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  ownerName?: ModelStringInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
  customerAddressId?: ModelIDInput | null;
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection";
  items: Array<Customer | null>;
  nextToken?: string | null;
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null;
  street?: ModelStringInput | null;
  number?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelAddressFilterInput | null> | null;
  or?: Array<ModelAddressFilterInput | null> | null;
  not?: ModelAddressFilterInput | null;
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection";
  items: Array<Address | null>;
  nextToken?: string | null;
};

export type ModelInvoiceIssuerCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  and?: Array<ModelInvoiceIssuerCompanyFilterInput | null> | null;
  or?: Array<ModelInvoiceIssuerCompanyFilterInput | null> | null;
  not?: ModelInvoiceIssuerCompanyFilterInput | null;
  invoiceIssuerCompanyAddressId?: ModelIDInput | null;
};

export type ModelInvoiceIssuerCompanyConnection = {
  __typename: "ModelInvoiceIssuerCompanyConnection";
  items: Array<InvoiceIssuerCompany | null>;
  nextToken?: string | null;
};

export type ModelCustomerPriceFilterInput = {
  id?: ModelIDInput | null;
  priceID?: ModelIDInput | null;
  customerID?: ModelIDInput | null;
  and?: Array<ModelCustomerPriceFilterInput | null> | null;
  or?: Array<ModelCustomerPriceFilterInput | null> | null;
  not?: ModelCustomerPriceFilterInput | null;
};

export type ModelSubscriptionInvoiceEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  value?: ModelSubscriptionIntInput | null;
  invoiceID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionInvoiceEntryFilterInput | null> | null;
  or?: Array<ModelSubscriptionInvoiceEntryFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProductFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionPriceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  price?: ModelSubscriptionFloatInput | null;
  productID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionPriceFilterInput | null> | null;
  or?: Array<ModelSubscriptionPriceFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionInvoiceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  deliveryStartDate?: ModelSubscriptionStringInput | null;
  deliveryEndDate?: ModelSubscriptionStringInput | null;
  issueDate?: ModelSubscriptionStringInput | null;
  invoiceNumber?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionInvoiceFilterInput | null> | null;
  or?: Array<ModelSubscriptionInvoiceFilterInput | null> | null;
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  companyName?: ModelSubscriptionStringInput | null;
  ownerName?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCustomerFilterInput | null> | null;
  or?: Array<ModelSubscriptionCustomerFilterInput | null> | null;
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  street?: ModelSubscriptionStringInput | null;
  number?: ModelSubscriptionStringInput | null;
  zip?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionAddressFilterInput | null> | null;
};

export type ModelSubscriptionInvoiceIssuerCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  taxId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionInvoiceIssuerCompanyFilterInput | null> | null;
  or?: Array<ModelSubscriptionInvoiceIssuerCompanyFilterInput | null> | null;
};

export type ModelSubscriptionCustomerPriceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  priceID?: ModelSubscriptionIDInput | null;
  customerID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCustomerPriceFilterInput | null> | null;
  or?: Array<ModelSubscriptionCustomerPriceFilterInput | null> | null;
};

export type CreateInvoiceEntryMutationVariables = {
  input: CreateInvoiceEntryInput;
  condition?: ModelInvoiceEntryConditionInput | null;
};

export type CreateInvoiceEntryMutation = {
  createInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type UpdateInvoiceEntryMutationVariables = {
  input: UpdateInvoiceEntryInput;
  condition?: ModelInvoiceEntryConditionInput | null;
};

export type UpdateInvoiceEntryMutation = {
  updateInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type DeleteInvoiceEntryMutationVariables = {
  input: DeleteInvoiceEntryInput;
  condition?: ModelInvoiceEntryConditionInput | null;
};

export type DeleteInvoiceEntryMutation = {
  deleteInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type CreateProductMutationVariables = {
  input: CreateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type CreateProductMutation = {
  createProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type UpdateProductMutation = {
  updateProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput;
  condition?: ModelProductConditionInput | null;
};

export type DeleteProductMutation = {
  deleteProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreatePriceMutationVariables = {
  input: CreatePriceInput;
  condition?: ModelPriceConditionInput | null;
};

export type CreatePriceMutation = {
  createPrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePriceMutationVariables = {
  input: UpdatePriceInput;
  condition?: ModelPriceConditionInput | null;
};

export type UpdatePriceMutation = {
  updatePrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePriceMutationVariables = {
  input: DeletePriceInput;
  condition?: ModelPriceConditionInput | null;
};

export type DeletePriceMutation = {
  deletePrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput;
  condition?: ModelInvoiceConditionInput | null;
};

export type CreateInvoiceMutation = {
  createInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput;
  condition?: ModelInvoiceConditionInput | null;
};

export type UpdateInvoiceMutation = {
  updateInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput;
  condition?: ModelInvoiceConditionInput | null;
};

export type DeleteInvoiceMutation = {
  deleteInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type CreateCustomerMutation = {
  createCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type UpdateCustomerMutation = {
  updateCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type DeleteCustomerMutation = {
  deleteCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput;
  condition?: ModelAddressConditionInput | null;
};

export type CreateAddressMutation = {
  createAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput;
  condition?: ModelAddressConditionInput | null;
};

export type UpdateAddressMutation = {
  updateAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput;
  condition?: ModelAddressConditionInput | null;
};

export type DeleteAddressMutation = {
  deleteAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateInvoiceIssuerCompanyMutationVariables = {
  input: CreateInvoiceIssuerCompanyInput;
  condition?: ModelInvoiceIssuerCompanyConditionInput | null;
};

export type CreateInvoiceIssuerCompanyMutation = {
  createInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type UpdateInvoiceIssuerCompanyMutationVariables = {
  input: UpdateInvoiceIssuerCompanyInput;
  condition?: ModelInvoiceIssuerCompanyConditionInput | null;
};

export type UpdateInvoiceIssuerCompanyMutation = {
  updateInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type DeleteInvoiceIssuerCompanyMutationVariables = {
  input: DeleteInvoiceIssuerCompanyInput;
  condition?: ModelInvoiceIssuerCompanyConditionInput | null;
};

export type DeleteInvoiceIssuerCompanyMutation = {
  deleteInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type CreateCustomerPriceMutationVariables = {
  input: CreateCustomerPriceInput;
  condition?: ModelCustomerPriceConditionInput | null;
};

export type CreateCustomerPriceMutation = {
  createCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCustomerPriceMutationVariables = {
  input: UpdateCustomerPriceInput;
  condition?: ModelCustomerPriceConditionInput | null;
};

export type UpdateCustomerPriceMutation = {
  updateCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCustomerPriceMutationVariables = {
  input: DeleteCustomerPriceInput;
  condition?: ModelCustomerPriceConditionInput | null;
};

export type DeleteCustomerPriceMutation = {
  deleteCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetInvoiceEntryQueryVariables = {
  id: string;
};

export type GetInvoiceEntryQuery = {
  getInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type ListInvoiceEntriesQueryVariables = {
  filter?: ModelInvoiceEntryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInvoiceEntriesQuery = {
  listInvoiceEntries?: {
    __typename: "ModelInvoiceEntryConnection";
    items: Array<{
      __typename: "InvoiceEntry";
      id: string;
      value?: number | null;
      Product?: {
        __typename: "Product";
        id: string;
        name?: string | null;
        Prices?: {
          __typename: "ModelPriceConnection";
          items: Array<{
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      Price?: {
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      invoiceID: string;
      createdAt: string;
      updatedAt: string;
      invoiceEntryProductId?: string | null;
      invoiceEntryPriceId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductQueryVariables = {
  id: string;
};

export type GetProductQuery = {
  getProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductsQuery = {
  listProducts?: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetPriceQueryVariables = {
  id: string;
};

export type GetPriceQuery = {
  getPrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPricesQueryVariables = {
  filter?: ModelPriceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPricesQuery = {
  listPrices?: {
    __typename: "ModelPriceConnection";
    items: Array<{
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInvoiceQueryVariables = {
  id: string;
};

export type GetInvoiceQuery = {
  getInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type ListInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInvoicesQuery = {
  listInvoices?: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      deliveryStartDate: string;
      deliveryEndDate: string;
      issueDate: string;
      Customer?: {
        __typename: "Customer";
        id: string;
        companyName: string;
        ownerName: string;
        Address?: {
          __typename: "Address";
          id: string;
          street: string;
          number: string;
          zip: string;
          city: string;
          createdAt: string;
          updatedAt: string;
        } | null;
        Prices?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        customerAddressId?: string | null;
      } | null;
      InvoiceEntries?: {
        __typename: "ModelInvoiceEntryConnection";
        items: Array<{
          __typename: "InvoiceEntry";
          id: string;
          value?: number | null;
          Product?: {
            __typename: "Product";
            id: string;
            name?: string | null;
            Prices?: {
              __typename: "ModelPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          } | null;
          Price?: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          } | null;
          invoiceID: string;
          createdAt: string;
          updatedAt: string;
          invoiceEntryProductId?: string | null;
          invoiceEntryPriceId?: string | null;
        } | null>;
        nextToken?: string | null;
      } | null;
      invoiceNumber: number;
      createdAt: string;
      updatedAt: string;
      invoiceCustomerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCustomerQueryVariables = {
  id: string;
};

export type GetCustomerQuery = {
  getCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomersQuery = {
  listCustomers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetAddressQueryVariables = {
  id: string;
};

export type GetAddressQuery = {
  getAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAddressesQuery = {
  listAddresses?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetInvoiceIssuerCompanyQueryVariables = {
  id: string;
};

export type GetInvoiceIssuerCompanyQuery = {
  getInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type ListInvoiceIssuerCompaniesQueryVariables = {
  filter?: ModelInvoiceIssuerCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListInvoiceIssuerCompaniesQuery = {
  listInvoiceIssuerCompanies?: {
    __typename: "ModelInvoiceIssuerCompanyConnection";
    items: Array<{
      __typename: "InvoiceIssuerCompany";
      id: string;
      name: string;
      phone: string;
      taxId: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
      invoiceIssuerCompanyAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCustomerPriceQueryVariables = {
  id: string;
};

export type GetCustomerPriceQuery = {
  getCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCustomerPricesQueryVariables = {
  filter?: ModelCustomerPriceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomerPricesQuery = {
  listCustomerPrices?: {
    __typename: "ModelCustomerPriceConnection";
    items: Array<{
      __typename: "CustomerPrice";
      id: string;
      priceID: string;
      customerID: string;
      price: {
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      customer: {
        __typename: "Customer";
        id: string;
        companyName: string;
        ownerName: string;
        Address?: {
          __typename: "Address";
          id: string;
          street: string;
          number: string;
          zip: string;
          city: string;
          createdAt: string;
          updatedAt: string;
        } | null;
        Prices?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        customerAddressId?: string | null;
      };
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateInvoiceEntrySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceEntryFilterInput | null;
};

export type OnCreateInvoiceEntrySubscription = {
  onCreateInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type OnUpdateInvoiceEntrySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceEntryFilterInput | null;
};

export type OnUpdateInvoiceEntrySubscription = {
  onUpdateInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type OnDeleteInvoiceEntrySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceEntryFilterInput | null;
};

export type OnDeleteInvoiceEntrySubscription = {
  onDeleteInvoiceEntry?: {
    __typename: "InvoiceEntry";
    id: string;
    value?: number | null;
    Product?: {
      __typename: "Product";
      id: string;
      name?: string | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    Price?: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invoiceID: string;
    createdAt: string;
    updatedAt: string;
    invoiceEntryProductId?: string | null;
    invoiceEntryPriceId?: string | null;
  } | null;
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnCreateProductSubscription = {
  onCreateProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null;
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?: {
    __typename: "Product";
    id: string;
    name?: string | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price?: number | null;
        productID: string;
        customers?: {
          __typename: "ModelCustomerPriceConnection";
          items: Array<{
            __typename: "CustomerPrice";
            id: string;
            priceID: string;
            customerID: string;
            price: {
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            };
            customer: {
              __typename: "Customer";
              id: string;
              companyName: string;
              ownerName: string;
              createdAt: string;
              updatedAt: string;
              customerAddressId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
          } | null>;
          nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreatePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null;
};

export type OnCreatePriceSubscription = {
  onCreatePrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null;
};

export type OnUpdatePriceSubscription = {
  onUpdatePrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePriceSubscriptionVariables = {
  filter?: ModelSubscriptionPriceFilterInput | null;
};

export type OnDeletePriceSubscription = {
  onDeletePrice?: {
    __typename: "Price";
    id: string;
    price?: number | null;
    productID: string;
    customers?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null;
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnUpdateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null;
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnDeleteInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null;
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate: string;
    deliveryEndDate: string;
    issueDate: string;
    Customer?: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    } | null;
    InvoiceEntries?: {
      __typename: "ModelInvoiceEntryConnection";
      items: Array<{
        __typename: "InvoiceEntry";
        id: string;
        value?: number | null;
        Product?: {
          __typename: "Product";
          id: string;
          name?: string | null;
          Prices?: {
            __typename: "ModelPriceConnection";
            items: Array<{
              __typename: "Price";
              id: string;
              price?: number | null;
              productID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        Price?: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        } | null;
        invoiceID: string;
        createdAt: string;
        updatedAt: string;
        invoiceEntryProductId?: string | null;
        invoiceEntryPriceId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    invoiceNumber: number;
    createdAt: string;
    updatedAt: string;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null;
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null;
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null;
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?: {
    __typename: "Customer";
    id: string;
    companyName: string;
    ownerName: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    Prices?: {
      __typename: "ModelCustomerPriceConnection";
      items: Array<{
        __typename: "CustomerPrice";
        id: string;
        priceID: string;
        customerID: string;
        price: {
          __typename: "Price";
          id: string;
          price?: number | null;
          productID: string;
          customers?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        customer: {
          __typename: "Customer";
          id: string;
          companyName: string;
          ownerName: string;
          Address?: {
            __typename: "Address";
            id: string;
            street: string;
            number: string;
            zip: string;
            city: string;
            createdAt: string;
            updatedAt: string;
          } | null;
          Prices?: {
            __typename: "ModelCustomerPriceConnection";
            items: Array<{
              __typename: "CustomerPrice";
              id: string;
              priceID: string;
              customerID: string;
              createdAt: string;
              updatedAt: string;
            } | null>;
            nextToken?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          customerAddressId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerAddressId?: string | null;
  } | null;
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null;
};

export type OnCreateAddressSubscription = {
  onCreateAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null;
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null;
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?: {
    __typename: "Address";
    id: string;
    street: string;
    number: string;
    zip: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateInvoiceIssuerCompanySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceIssuerCompanyFilterInput | null;
};

export type OnCreateInvoiceIssuerCompanySubscription = {
  onCreateInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type OnUpdateInvoiceIssuerCompanySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceIssuerCompanyFilterInput | null;
};

export type OnUpdateInvoiceIssuerCompanySubscription = {
  onUpdateInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type OnDeleteInvoiceIssuerCompanySubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceIssuerCompanyFilterInput | null;
};

export type OnDeleteInvoiceIssuerCompanySubscription = {
  onDeleteInvoiceIssuerCompany?: {
    __typename: "InvoiceIssuerCompany";
    id: string;
    name: string;
    phone: string;
    taxId: string;
    Address?: {
      __typename: "Address";
      id: string;
      street: string;
      number: string;
      zip: string;
      city: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type OnCreateCustomerPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerPriceFilterInput | null;
};

export type OnCreateCustomerPriceSubscription = {
  onCreateCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCustomerPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerPriceFilterInput | null;
};

export type OnUpdateCustomerPriceSubscription = {
  onUpdateCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCustomerPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerPriceFilterInput | null;
};

export type OnDeleteCustomerPriceSubscription = {
  onDeleteCustomerPrice?: {
    __typename: "CustomerPrice";
    id: string;
    priceID: string;
    customerID: string;
    price: {
      __typename: "Price";
      id: string;
      price?: number | null;
      productID: string;
      customers?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    };
    customer: {
      __typename: "Customer";
      id: string;
      companyName: string;
      ownerName: string;
      Address?: {
        __typename: "Address";
        id: string;
        street: string;
        number: string;
        zip: string;
        city: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      Prices?: {
        __typename: "ModelCustomerPriceConnection";
        items: Array<{
          __typename: "CustomerPrice";
          id: string;
          priceID: string;
          customerID: string;
          price: {
            __typename: "Price";
            id: string;
            price?: number | null;
            productID: string;
            customers?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
          };
          customer: {
            __typename: "Customer";
            id: string;
            companyName: string;
            ownerName: string;
            Address?: {
              __typename: "Address";
              id: string;
              street: string;
              number: string;
              zip: string;
              city: string;
              createdAt: string;
              updatedAt: string;
            } | null;
            Prices?: {
              __typename: "ModelCustomerPriceConnection";
              nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            customerAddressId?: string | null;
          };
          createdAt: string;
          updatedAt: string;
        } | null>;
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerAddressId?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
};
