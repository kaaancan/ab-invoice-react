/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInvoiceInput = {
  id?: string | null;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  issueDate?: string | null;
  _version?: number | null;
  invoiceCustomerId?: string | null;
};

export type ModelInvoiceConditionInput = {
  deliveryStartDate?: ModelStringInput | null;
  deliveryEndDate?: ModelStringInput | null;
  issueDate?: ModelStringInput | null;
  and?: Array<ModelInvoiceConditionInput | null> | null;
  or?: Array<ModelInvoiceConditionInput | null> | null;
  not?: ModelInvoiceConditionInput | null;
  invoiceCustomerId?: ModelIDInput | null;
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

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

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

export type Invoice = {
  __typename: "Invoice";
  id: string;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  issueDate?: string | null;
  Customer?: Customer | null;
  Prices?: ModelPriceConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  invoiceCustomerId?: string | null;
};

export type Customer = {
  __typename: "Customer";
  id: string;
  companyName: string;
  ownerName: string;
  Address?: Address | null;
  Prices?: ModelPriceConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
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
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelPriceConnection = {
  __typename: "ModelPriceConnection";
  items: Array<Price | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Price = {
  __typename: "Price";
  id: string;
  price: number;
  productID: string;
  customerID: string;
  invoiceID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateInvoiceInput = {
  id: string;
  deliveryStartDate?: string | null;
  deliveryEndDate?: string | null;
  issueDate?: string | null;
  _version?: number | null;
  invoiceCustomerId?: string | null;
};

export type DeleteInvoiceInput = {
  id: string;
  _version?: number | null;
};

export type CreatePriceInput = {
  id?: string | null;
  price: number;
  productID: string;
  customerID: string;
  invoiceID?: string | null;
  _version?: number | null;
};

export type ModelPriceConditionInput = {
  price?: ModelFloatInput | null;
  productID?: ModelIDInput | null;
  customerID?: ModelIDInput | null;
  invoiceID?: ModelIDInput | null;
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
  customerID?: string | null;
  invoiceID?: string | null;
  _version?: number | null;
};

export type DeletePriceInput = {
  id: string;
  _version?: number | null;
};

export type CreateProductInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name: string;
  Prices?: ModelPriceConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteProductInput = {
  id: string;
  _version?: number | null;
};

export type CreateCustomerInput = {
  id?: string | null;
  companyName: string;
  ownerName: string;
  _version?: number | null;
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
  _version?: number | null;
  customerAddressId?: string | null;
};

export type DeleteCustomerInput = {
  id: string;
  _version?: number | null;
};

export type CreateAddressInput = {
  id?: string | null;
  street: string;
  number: string;
  zip: string;
  city: string;
  _version?: number | null;
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
  _version?: number | null;
};

export type DeleteAddressInput = {
  id: string;
  _version?: number | null;
};

export type CreateInvoiceIssuerCompanyInput = {
  id?: string | null;
  name: string;
  phone: string;
  taxId: string;
  _version?: number | null;
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
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  invoiceIssuerCompanyAddressId?: string | null;
};

export type UpdateInvoiceIssuerCompanyInput = {
  id: string;
  name?: string | null;
  phone?: string | null;
  taxId?: string | null;
  _version?: number | null;
  invoiceIssuerCompanyAddressId?: string | null;
};

export type DeleteInvoiceIssuerCompanyInput = {
  id: string;
  _version?: number | null;
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null;
  deliveryStartDate?: ModelStringInput | null;
  deliveryEndDate?: ModelStringInput | null;
  issueDate?: ModelStringInput | null;
  and?: Array<ModelInvoiceFilterInput | null> | null;
  or?: Array<ModelInvoiceFilterInput | null> | null;
  not?: ModelInvoiceFilterInput | null;
  invoiceCustomerId?: ModelIDInput | null;
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection";
  items: Array<Invoice | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPriceFilterInput = {
  id?: ModelIDInput | null;
  price?: ModelFloatInput | null;
  productID?: ModelIDInput | null;
  customerID?: ModelIDInput | null;
  invoiceID?: ModelIDInput | null;
  and?: Array<ModelPriceFilterInput | null> | null;
  or?: Array<ModelPriceFilterInput | null> | null;
  not?: ModelPriceFilterInput | null;
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
  startedAt?: number | null;
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
  startedAt?: number | null;
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
  startedAt?: number | null;
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
  startedAt?: number | null;
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput;
  condition?: ModelInvoiceConditionInput | null;
};

export type CreateInvoiceMutation = {
  createInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceCustomerId?: string | null;
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
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};

export type GetInvoiceQueryVariables = {
  id: string;
};

export type GetInvoiceQuery = {
  getInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      deliveryStartDate?: string | null;
      deliveryEndDate?: string | null;
      issueDate?: string | null;
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
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        Prices?: {
          __typename: "ModelPriceConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        customerAddressId?: string | null;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      invoiceCustomerId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncInvoicesQuery = {
  syncInvoices?: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      deliveryStartDate?: string | null;
      deliveryEndDate?: string | null;
      issueDate?: string | null;
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
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null;
        Prices?: {
          __typename: "ModelPriceConnection";
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        customerAddressId?: string | null;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      invoiceCustomerId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPriceQueryVariables = {
  id: string;
};

export type GetPriceQuery = {
  getPrice?: {
    __typename: "Price";
    id: string;
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      price: number;
      productID: string;
      customerID: string;
      invoiceID?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPricesQueryVariables = {
  filter?: ModelPriceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPricesQuery = {
  syncPrices?: {
    __typename: "ModelPriceConnection";
    items: Array<{
      __typename: "Price";
      id: string;
      price: number;
      productID: string;
      customerID: string;
      invoiceID?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetProductQueryVariables = {
  id: string;
};

export type GetProductQuery = {
  getProduct?: {
    __typename: "Product";
    id: string;
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      name: string;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncProductsQuery = {
  syncProducts?: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCustomersQuery = {
  syncCustomers?: {
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncAddressesQuery = {
  syncAddresses?: {
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      invoiceIssuerCompanyAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncInvoiceIssuerCompaniesQueryVariables = {
  filter?: ModelInvoiceIssuerCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncInvoiceIssuerCompaniesQuery = {
  syncInvoiceIssuerCompanies?: {
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      invoiceIssuerCompanyAddressId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?: {
    __typename: "Invoice";
    id: string;
    deliveryStartDate?: string | null;
    deliveryEndDate?: string | null;
    issueDate?: string | null;
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
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null;
      Prices?: {
        __typename: "ModelPriceConnection";
        items: Array<{
          __typename: "Price";
          id: string;
          price: number;
          productID: string;
          customerID: string;
          invoiceID?: string | null;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      customerAddressId?: string | null;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceCustomerId?: string | null;
  } | null;
};

export type OnCreatePriceSubscription = {
  onCreatePrice?: {
    __typename: "Price";
    id: string;
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdatePriceSubscription = {
  onUpdatePrice?: {
    __typename: "Price";
    id: string;
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeletePriceSubscription = {
  onDeletePrice?: {
    __typename: "Price";
    id: string;
    price: number;
    productID: string;
    customerID: string;
    invoiceID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateProductSubscription = {
  onCreateProduct?: {
    __typename: "Product";
    id: string;
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?: {
    __typename: "Product";
    id: string;
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?: {
    __typename: "Product";
    id: string;
    name: string;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    customerAddressId?: string | null;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    customerAddressId?: string | null;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Prices?: {
      __typename: "ModelPriceConnection";
      items: Array<{
        __typename: "Price";
        id: string;
        price: number;
        productID: string;
        customerID: string;
        invoiceID?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    customerAddressId?: string | null;
  } | null;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
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
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
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
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    invoiceIssuerCompanyAddressId?: string | null;
  } | null;
};
