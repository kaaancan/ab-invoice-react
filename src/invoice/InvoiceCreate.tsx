import React, { memo, useCallback, useState } from "react";
import { CreateInvoiceInput, Customer, Product } from "../API";
import { find } from "lodash";
import { Button, NumberInput } from "@mantine/core";
import { InvoiceCreateProps } from "./types";
import { formatNumberToEuro } from "./utils";
import { API } from "aws-amplify";
import { createInvoice } from "../graphql/mutations";
import { formatDayjsToAWSDate } from "../utils";

interface InvoiceProps
  extends Pick<InvoiceCreateProps, "products" | "startDate" | "endDate"> {
  currentCustomer: Customer;
}

export const InvoiceCreate = memo(function InvoiceCreate(
  props: InvoiceProps
): React.ReactElement {
  const { currentCustomer, products, startDate, endDate } = props;

  const [invoice, setInvoice] = useState<CreateInvoiceInput>({
    invoiceCustomerId: currentCustomer.id,
    deliveryStartDate: formatDayjsToAWSDate(startDate),
    deliveryEndDate: formatDayjsToAWSDate(endDate),
    issueDate: formatDayjsToAWSDate(endDate),
    //TODO KAAN: Fetch the last invoiceNumber from the database
    invoiceNumber: 1179,
  });

  const createInvoiceCallback = useCallback(() => {
    API.graphql({ query: createInvoice, variables: { input: invoice } });
  }, []);

  return (
    <div className={"productInputWrapper"}>
      {currentCustomer.Prices !== null &&
        currentCustomer.Prices?.items.map((productWithPrice, index) => {
          const productForPrice: Product | undefined = find(products, {
            id: productWithPrice?.price.productID || "",
          });
          if (productWithPrice !== null && productForPrice !== undefined) {
            return (
              <div className={"productInput"} key={index}>
                <NumberInput hideControls style={{ width: 80 }} />
                <div>
                  {formatNumberToEuro(productWithPrice.price.price || 0)}
                </div>
                <div>{productForPrice.name}</div>
              </div>
            );
          }
        })}
      <Button onClick={createInvoiceCallback}>Create Invoice</Button>
    </div>
  );
});
