import React, { memo, useEffect, useState } from "react";
import { Button, Group, Stepper } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import dayjs from "dayjs";

import * as queries from "../graphql/queries";
import { API } from "aws-amplify";
import { Customer, ListCustomersQuery } from "../API";

export const InvoiceStepper = memo(
  function InvoiceStepper(): React.ReactElement {
    const [active, setActive] = useState(0);
    const nextStep = () =>
      setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () =>
      setActive((current) => (current > 0 ? current - 1 : current));
    const [value, setValue] = useState<[Date | null, Date | null]>([
      dayjs().startOf("month").toDate(),
      dayjs().endOf("month").toDate(),
    ]);

    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
      const allCustomersQuery = API.graphql({
        query: queries.listCustomers,
      }) as Promise<{ data: ListCustomersQuery }>;
      allCustomersQuery.then((result) => {
        if (
          result.data.listCustomers &&
          result.data.listCustomers.items !== null
        ) {
          result.data.listCustomers.items.map((customer) => {
            console.log(customer);
            if (customer !== null) {
              console.log(customer);
              setCustomers([...customers, customer]);
            }
          });
        }
      });
    }, []);

    return (
      <div>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="İlk adım" description="Ayı seçin">
            <DateRangePicker
              label={"Faturalarin tarihi secin"}
              value={value}
              onChange={setValue}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Son adim"
            description="Müşteri seçin ve fatura oluşturun"
          >
            {customers.map((customer, index) => {
              return <div key={"customer-" + index}>{customer.ownerName}</div>;
            })}
          </Stepper.Step>
          <Stepper.Completed>Aasdasd</Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </div>
    );
  }
);
