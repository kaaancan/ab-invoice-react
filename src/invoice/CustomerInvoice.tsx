import React, { memo, useEffect, useState } from "react";
import { Customer } from "../API";

import { Divider, Select } from "@mantine/core";
import { InvoiceCreateProps } from "./types";
import { InvoiceCreate } from "./InvoiceCreate";
import { PrevNextButtons } from "./prev-next-buttons";

export const CustomerInvoice = memo(function CustomerInvoice(
  props: InvoiceCreateProps
): React.ReactElement {
  const { customers, products, startDate, endDate } = props;

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
  }, [currentCustomerIndex, customers]);

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
        <InvoiceCreate
          startDate={startDate}
          endDate={endDate}
          currentCustomer={currentCustomer}
          products={products}
        />
      )}
      <PrevNextButtons
        currentCustomerIndex={currentCustomerIndex}
        onChangeCurrentCustomerIndex={setCurrentCustomerIndex}
        customerCount={customers.length}
      />
    </div>
  );
});
