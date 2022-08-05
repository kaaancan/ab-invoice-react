/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
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
export const onCreatePrice = /* GraphQL */ `
  subscription OnCreatePrice {
    onCreatePrice {
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
export const onUpdatePrice = /* GraphQL */ `
  subscription OnUpdatePrice {
    onUpdatePrice {
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
export const onDeletePrice = /* GraphQL */ `
  subscription OnDeletePrice {
    onDeletePrice {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnCreateInvoiceIssuerCompany {
    onCreateInvoiceIssuerCompany {
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
export const onUpdateInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnUpdateInvoiceIssuerCompany {
    onUpdateInvoiceIssuerCompany {
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
export const onDeleteInvoiceIssuerCompany = /* GraphQL */ `
  subscription OnDeleteInvoiceIssuerCompany {
    onDeleteInvoiceIssuerCompany {
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
