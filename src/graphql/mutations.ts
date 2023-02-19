/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvoiceEntry = /* GraphQL */ `
  mutation CreateInvoiceEntry(
    $input: CreateInvoiceEntryInput!
    $condition: ModelInvoiceEntryConditionInput
  ) {
    createInvoiceEntry(input: $input, condition: $condition) {
      id
      value
      Product {
        id
        name
        Prices {
          items {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      invoiceID
      createdAt
      updatedAt
      invoiceEntryProductId
      invoiceEntryPriceId
    }
  }
`;
export const updateInvoiceEntry = /* GraphQL */ `
  mutation UpdateInvoiceEntry(
    $input: UpdateInvoiceEntryInput!
    $condition: ModelInvoiceEntryConditionInput
  ) {
    updateInvoiceEntry(input: $input, condition: $condition) {
      id
      value
      Product {
        id
        name
        Prices {
          items {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      invoiceID
      createdAt
      updatedAt
      invoiceEntryProductId
      invoiceEntryPriceId
    }
  }
`;
export const deleteInvoiceEntry = /* GraphQL */ `
  mutation DeleteInvoiceEntry(
    $input: DeleteInvoiceEntryInput!
    $condition: ModelInvoiceEntryConditionInput
  ) {
    deleteInvoiceEntry(input: $input, condition: $condition) {
      id
      value
      Product {
        id
        name
        Prices {
          items {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      invoiceID
      createdAt
      updatedAt
      invoiceEntryProductId
      invoiceEntryPriceId
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
          customers {
            items {
              id
              priceID
              customerID
              price {
                id
                price
                productID
                createdAt
                updatedAt
              }
              customer {
                id
                companyName
                ownerName
                createdAt
                updatedAt
                customerAddressId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          customers {
            items {
              id
              priceID
              customerID
              price {
                id
                price
                productID
                createdAt
                updatedAt
              }
              customer {
                id
                companyName
                ownerName
                createdAt
                updatedAt
                customerAddressId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          customers {
            items {
              id
              priceID
              customerID
              price {
                id
                price
                productID
                createdAt
                updatedAt
              }
              customer {
                id
                companyName
                ownerName
                createdAt
                updatedAt
                customerAddressId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      customers {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      customers {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      customers {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      InvoiceEntries {
        items {
          id
          value
          Product {
            id
            name
            Prices {
              items {
                id
                price
                productID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          Price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          invoiceID
          createdAt
          updatedAt
          invoiceEntryProductId
          invoiceEntryPriceId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      InvoiceEntries {
        items {
          id
          value
          Product {
            id
            name
            Prices {
              items {
                id
                price
                productID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          Price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          invoiceID
          createdAt
          updatedAt
          invoiceEntryProductId
          invoiceEntryPriceId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      InvoiceEntries {
        items {
          id
          value
          Product {
            id
            name
            Prices {
              items {
                id
                price
                productID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          Price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          invoiceID
          createdAt
          updatedAt
          invoiceEntryProductId
          invoiceEntryPriceId
        }
        nextToken
      }
      createdAt
      updatedAt
      invoiceCustomerId
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
      }
      Prices {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      }
      Prices {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      }
      Prices {
        items {
          id
          priceID
          customerID
          price {
            id
            price
            productID
            customers {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          customer {
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
            }
            Prices {
              items {
                id
                priceID
                customerID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
            customerAddressId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
      invoiceIssuerCompanyAddressId
    }
  }
`;
export const createCustomerPrice = /* GraphQL */ `
  mutation CreateCustomerPrice(
    $input: CreateCustomerPriceInput!
    $condition: ModelCustomerPriceConditionInput
  ) {
    createCustomerPrice(input: $input, condition: $condition) {
      id
      priceID
      customerID
      price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customer {
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerPrice = /* GraphQL */ `
  mutation UpdateCustomerPrice(
    $input: UpdateCustomerPriceInput!
    $condition: ModelCustomerPriceConditionInput
  ) {
    updateCustomerPrice(input: $input, condition: $condition) {
      id
      priceID
      customerID
      price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customer {
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerPrice = /* GraphQL */ `
  mutation DeleteCustomerPrice(
    $input: DeleteCustomerPriceInput!
    $condition: ModelCustomerPriceConditionInput
  ) {
    deleteCustomerPrice(input: $input, condition: $condition) {
      id
      priceID
      customerID
      price {
        id
        price
        productID
        customers {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      customer {
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
        }
        Prices {
          items {
            id
            priceID
            customerID
            price {
              id
              price
              productID
              customers {
                nextToken
              }
              createdAt
              updatedAt
            }
            customer {
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
              }
              Prices {
                nextToken
              }
              createdAt
              updatedAt
              customerAddressId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        customerAddressId
      }
      createdAt
      updatedAt
    }
  }
`;
