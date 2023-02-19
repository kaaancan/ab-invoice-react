import React, { memo, useEffect, useState } from "react";
import { Customer, Invoice } from "../API";

import "./InvoiceCreate.css";
import { Divider, Select } from "@mantine/core";
import { InvoiceCreateProps } from "./types";
import { InvoiceCreate } from "./InvoiceCreate";
import { PrevNextButtons } from "./prev-next-buttons";

export const CustomerInvoiceSelect = memo(function CustomerInvoiceSelect(
  props: InvoiceCreateProps
): React.ReactElement {
  const { customers, products } = props;

  const [createInvoices, setCreateInvoice] = useState<Invoice[]>();

  const [currentCustomer, setCurrentCustomer] = useState<Customer>();

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
            const selectedCustomer = customers.find(
              (customer) => customer.id === value
            );
            if (selectedCustomer) {
              setCurrentCustomer(selectedCustomer);
              setCurrentCustomerSelect(value);
              setCurrentCustomerIndex(
                customers.findIndex((customer) => customer === selectedCustomer)
              );
            }
          }}
        />
      </div>
      <Divider />
      {currentCustomer !== undefined && (
        <InvoiceCreate currentCustomer={currentCustomer} products={products} />
      )}
      <PrevNextButtons
        currentCustomerIndex={currentCustomerIndex}
        onChangeCurrentCustomerIndex={setCurrentCustomerIndex}
        customerCount={customers.length}
      />
    </div>
  );
});
