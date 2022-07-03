import React, { memo } from "react";
import { Center } from "@mantine/core";
import { InvoiceStepper } from "../invoice/InvoiceStepper";

export const InvoicePage = memo(function InvoicePage(): React.ReactElement {
  return (
    <Center style={{ height: 600 }}>
      <InvoiceStepper />
    </Center>
  );
});
