/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInvoiceEntry = /* GraphQL */ `
  subscription OnCreateInvoiceEntry(
    $filter: ModelSubscriptionInvoiceEntryFilterInput
  ) {
    onCreateInvoiceEntry(filter: $filter) {
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
export const onUpdateInvoiceEntry = /* GraphQL */ `
  subscription OnUpdateInvoiceEntry(
    $filter: ModelSubscriptionInvoiceEntryFilterInput
  ) {
    onUpdateInvoiceEntry(filter: $filter) {
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
export const onDeleteInvoiceEntry = /* GraphQL */ `
  subscription OnDeleteInvoiceEntry(
    $filter: ModelSubscriptionInvoiceEntryFilterInput
  ) {
    onDeleteInvoiceEntry(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreatePrice = /* GraphQL */ `
  subscription OnCreatePrice($filter: ModelSubscriptionPriceFilterInput) {
    onCreatePrice(filter: $filter) {
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
export const onUpdatePrice = /* GraphQL */ `
  subscription OnUpdatePrice($filter: ModelSubscriptionPriceFilterInput) {
    onUpdatePrice(filter: $filter) {
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
export const onDeletePrice = /* GraphQL */ `
  subscription OnDeletePrice($filter: ModelSubscriptionPriceFilterInput) {
    onDeletePrice(filter: $filter) {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onCreateInvoice(filter: $filter) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onUpdateInvoice(filter: $filter) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onDeleteInvoice(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnCreateInvoiceIssuerCompany(
    $filter: ModelSubscriptionInvoiceIssuerCompanyFilterInput
  ) {
    onCreateInvoiceIssuerCompany(filter: $filter) {
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
export const onUpdateInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnUpdateInvoiceIssuerCompany(
    $filter: ModelSubscriptionInvoiceIssuerCompanyFilterInput
  ) {
    onUpdateInvoiceIssuerCompany(filter: $filter) {
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
export const onDeleteInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnDeleteInvoiceIssuerCompany(
    $filter: ModelSubscriptionInvoiceIssuerCompanyFilterInput
  ) {
    onDeleteInvoiceIssuerCompany(filter: $filter) {
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
export const onCreateCustomerPrice = /* GraphQL */ `
  subscription OnCreateCustomerPrice(
    $filter: ModelSubscriptionCustomerPriceFilterInput
  ) {
    onCreateCustomerPrice(filter: $filter) {
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
export const onUpdateCustomerPrice = /* GraphQL */ `
  subscription OnUpdateCustomerPrice(
    $filter: ModelSubscriptionCustomerPriceFilterInput
  ) {
    onUpdateCustomerPrice(filter: $filter) {
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
export const onDeleteCustomerPrice = /* GraphQL */ `
  subscription OnDeleteCustomerPrice(
    $filter: ModelSubscriptionCustomerPriceFilterInput
  ) {
    onDeleteCustomerPrice(filter: $filter) {
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
