import React, { memo } from "react";
import { Customer, Product } from "../API";
import { find } from "lodash";
import { NumberInput } from "@mantine/core";
import { InvoiceCreateProps } from "./types";
import { formatNumberToEuro } from "./utils";

interface InvoiceProps extends Pick<InvoiceCreateProps, "products"> {
  currentCustomer: Customer;
}

export const InvoiceCreate = memo(function InvoiceCreate(
  props: InvoiceProps
): React.ReactElement {
  const { currentCustomer, products } = props;

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
    </div>
  );
});
