import React, { memo, useEffect, useState } from "react";
import { Customer, Product } from "../API";

import "./InvoiceCreate.css";
import { Button, Select, TextInput } from "@mantine/core";
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

  const [currentCustomerSelect, setCurrentCustomerSelect] =
    useState<string>("");

  const [currentCustomerIndex, setCurrentCustomerIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentCustomer(customers[0]);
    setCurrentCustomerSelect(customers[0].id);
    setCurrentCustomerIndex(0);
  }, [customers]);

  useEffect(() => {
    setCurrentCustomer(customers[currentCustomerIndex]);
    setCurrentCustomerSelect(customers[currentCustomerIndex].id);
  }, [currentCustomerIndex]);

  return (
    <div className={"invoiceCreate"}>
      <div>
        <Select
          data={customers.map((customer) => {
            return {
              value: customer.id,
              label: `${customer.companyName}/${customer.ownerName}`,
            };
          })}
          value={currentCustomerSelect}
          onChange={(value: string) => {
            //TODO KAAN: If changed this, need to change index stuff
            console.log(value);
            setCurrentCustomerSelect(value);
          }}
        />
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
      <div className={"customerNavigationButtons"}>
        {currentCustomerIndex > 0 && (
          <Button
            onClick={() => setCurrentCustomerIndex(currentCustomerIndex - 1)}
          >
            Önceki müşteri
          </Button>
        )}
        {currentCustomerIndex < customers.length - 1 && (
          <Button
            onClick={() => setCurrentCustomerIndex(currentCustomerIndex + 1)}
          >
            Sonraki müşteri
          </Button>
        )}
      </div>
    </div>
  );
});
