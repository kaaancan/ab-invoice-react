import React, { memo, useEffect, useState } from "react";
import { Customer, Product } from "../API";

import "./InvoiceCreate.css";
import { TextInput } from "@mantine/core";
import { find } from "lodash";

export interface InvoiceCreateProps {
  startDate: Date;
  endDate: Date;
  customers: Customer[];
  products: Product[];
}

function formatNumberToEuro(value: number) {
  return value.toFixed(2).replace(".", ",") + " €";
}

export const InvoiceCreate = memo(function InvoiceCreate(
  props: InvoiceCreateProps
): React.ReactElement {
  const { customers, products } = props;

  const [currentCustomer, setCurrentCustomer] = useState<Customer>({
    Address: undefined,
    Prices: undefined,
    __typename: "Customer",
    _deleted: undefined,
    _lastChangedAt: 0,
    _version: 0,
    companyName: "",
    createdAt: "",
    customerAddressId: undefined,
    id: "",
    ownerName: "",
    updatedAt: "",
  });

  useEffect(() => {
    setCurrentCustomer(customers[0]);
  }, [customers]);

  return (
    <div className={"invoiceCreate"}>
      <div className={"currentCustomer"}>
        <div>
          {currentCustomer.companyName}/{currentCustomer.ownerName}
        </div>
        <div className={"productInputWrapper"}>
          {currentCustomer.Prices !== null &&
            currentCustomer.Prices?.items.map((productWithPrice, index) => {
              const productForPrice: Product | undefined = find(products, {
                id: productWithPrice?.productID || "",
              });
              if (productWithPrice !== null && productForPrice !== undefined) {
                return (
                  <div className={"productInput"} key={index}>
                    <TextInput style={{ width: 50 }} />
                    <div>{formatNumberToEuro(productWithPrice.price)}</div>
                    <div>{productForPrice.name}</div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
});
