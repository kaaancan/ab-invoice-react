/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvoiceEntry = /* GraphQL */ `
  query GetInvoiceEntry($id: ID!) {
    getInvoiceEntry(id: $id) {
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
export const listInvoiceEntries = /* GraphQL */ `
  query ListInvoiceEntries(
    $filter: ModelInvoiceEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              customers {
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
        invoiceID
        createdAt
        updatedAt
        invoiceEntryProductId
        invoiceEntryPriceId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPrice = /* GraphQL */ `
  query GetPrice($id: ID!) {
    getPrice(id: $id) {
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
export const listPrices = /* GraphQL */ `
  query ListPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
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
      invoiceNumber
      createdAt
      updatedAt
      invoiceCustomerId
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        invoiceNumber
        createdAt
        updatedAt
        invoiceCustomerId
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        street
        number
        zip
        city
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoiceIssuerCompany = /* GraphQL */ `
  query GetInvoiceIssuerCompany($id: ID!) {
    getInvoiceIssuerCompany(id: $id) {
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
export const listInvoiceIssuerCompanies = /* GraphQL */ `
  query ListInvoiceIssuerCompanies(
    $filter: ModelInvoiceIssuerCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceIssuerCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomerPrice = /* GraphQL */ `
  query GetCustomerPrice($id: ID!) {
    getCustomerPrice(id: $id) {
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
export const listCustomerPrices = /* GraphQL */ `
  query ListCustomerPrices(
    $filter: ModelCustomerPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          customerAddressId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listInvoiceNumbers = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invoiceNumber
      }
      nextToken
    }
  }
`;
