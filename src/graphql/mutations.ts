/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      deliveryStartDate
      deliveryEndDate
      issueDate
      Customer {
        id
        companyName
        ownerName
        Address {
          id
          street
          number
          zip
          city
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Prices {
          items {
            id
            price
            productID
            customerID
            invoiceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerAddressId
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceCustomerId
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      deliveryStartDate
      deliveryEndDate
      issueDate
      Customer {
        id
        companyName
        ownerName
        Address {
          id
          street
          number
          zip
          city
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Prices {
          items {
            id
            price
            productID
            customerID
            invoiceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerAddressId
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceCustomerId
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      deliveryStartDate
      deliveryEndDate
      issueDate
      Customer {
        id
        companyName
        ownerName
        Address {
          id
          street
          number
          zip
          city
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Prices {
          items {
            id
            price
            productID
            customerID
            invoiceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerAddressId
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceCustomerId
    }
  }
`;
export const createPrice = /* GraphQL */ `
  mutation CreatePrice(
    $input: CreatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    createPrice(input: $input, condition: $condition) {
      id
      price
      productID
      customerID
      invoiceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePrice = /* GraphQL */ `
  mutation UpdatePrice(
    $input: UpdatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    updatePrice(input: $input, condition: $condition) {
      id
      price
      productID
      customerID
      invoiceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePrice = /* GraphQL */ `
  mutation DeletePrice(
    $input: DeletePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    deletePrice(input: $input, condition: $condition) {
      id
      price
      productID
      customerID
      invoiceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      companyName
      ownerName
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAddressId
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      companyName
      ownerName
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAddressId
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      companyName
      ownerName
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Prices {
        items {
          id
          price
          productID
          customerID
          invoiceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerAddressId
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      street
      number
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      street
      number
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      street
      number
      zip
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createInvoiceIssuerCompany = /* GraphQL */ `
  mutation CreateInvoiceIssuerCompany(
    $input: CreateInvoiceIssuerCompanyInput!
    $condition: ModelInvoiceIssuerCompanyConditionInput
  ) {
    createInvoiceIssuerCompany(input: $input, condition: $condition) {
      id
      name
      phone
      taxId
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceIssuerCompanyAddressId
    }
  }
`;
export const updateInvoiceIssuerCompany = /* GraphQL */ `
  mutation UpdateInvoiceIssuerCompany(
    $input: UpdateInvoiceIssuerCompanyInput!
    $condition: ModelInvoiceIssuerCompanyConditionInput
  ) {
    updateInvoiceIssuerCompany(input: $input, condition: $condition) {
      id
      name
      phone
      taxId
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceIssuerCompanyAddressId
    }
  }
`;
export const deleteInvoiceIssuerCompany = /* GraphQL */ `
  mutation DeleteInvoiceIssuerCompany(
    $input: DeleteInvoiceIssuerCompanyInput!
    $condition: ModelInvoiceIssuerCompanyConditionInput
  ) {
    deleteInvoiceIssuerCompany(input: $input, condition: $condition) {
      id
      name
      phone
      taxId
      Address {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceIssuerCompanyAddressId
    }
  }
`;
