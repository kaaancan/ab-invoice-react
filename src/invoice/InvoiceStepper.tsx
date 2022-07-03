import React, { memo, useState } from "react";
import { Button, Group, Stepper } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { API } from "aws-amplify";
import { listCustomers } from "../graphql/queries";

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

    const allCustomers = API.graphql({ query: listCustomers });

    console.log(allCustomers);

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
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
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
