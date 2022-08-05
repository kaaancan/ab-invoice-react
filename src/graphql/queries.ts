/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
            _version
            _deleted
            _lastChangedAt
          }
          Prices {
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
      nextToken
      startedAt
    }
  }
`;
export const syncInvoices = /* GraphQL */ `
  query SyncInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            _version
            _deleted
            _lastChangedAt
          }
          Prices {
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
      nextToken
      startedAt
    }
  }
`;
export const getPrice = /* GraphQL */ `
  query GetPrice($id: ID!) {
    getPrice(id: $id) {
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
  }
`;
export const syncPrices = /* GraphQL */ `
  query SyncPrices(
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncInvoiceIssuerCompanies = /* GraphQL */ `
  query SyncInvoiceIssuerCompanies(
    $filter: ModelInvoiceIssuerCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvoiceIssuerCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
      nextToken
      startedAt
    }
  }
`;
