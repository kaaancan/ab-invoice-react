import React, { memo, useCallback, useEffect, useState } from "react";
import { Button, Group, Stepper } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import dayjs, { Dayjs } from "dayjs";
import { CustomerInvoice } from "./CustomerInvoice";
import {
  Customer,
  ListCustomersQuery,
  ListProductsQuery,
  Product,
} from "../API";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import "./Invoice.css";

export const InvoiceStepper = memo(
  function InvoiceStepper(): React.ReactElement {
    const [active, setActive] = useState(0);
    const nextStep = () =>
      setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () =>
      setActive((current) => (current > 0 ? current - 1 : current));
    const [value, setValue] = useState<[Dayjs, Dayjs]>([
      dayjs().startOf("month"),
      dayjs().endOf("month"),
    ]);

    const [customers, setCustomers] = useState<Customer[]>([]);

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      const allCustomersQuery = API.graphql({
        query: queries.listCustomers,
      }) as Promise<{ data: ListCustomersQuery }>;
      allCustomersQuery.then((result) => {
        if (
          result.data.listCustomers &&
          result.data.listCustomers.items !== null
        ) {
          const allCustomers: Customer[] = [];
          result.data.listCustomers.items.map((customer) =>
            customer !== null
              ? allCustomers.push(customer as Customer)
              : customer
          );
          setCustomers(
            allCustomers.filter((customer) => !!customer.Prices?.items.length)
          );
        }
      });
    }, []);

    useEffect(() => {
      const allProductsQuery = API.graphql({
        query: queries.listProducts,
      }) as Promise<{ data: ListProductsQuery }>;
      allProductsQuery.then((result) => {
        if (
          result.data.listProducts &&
          result.data.listProducts.items !== null
        ) {
          const allProducts: Product[] = [];
          result.data.listProducts.items.map((product) =>
            product !== null ? allProducts.push(product as Product) : product
          );
          setProducts(allProducts);
        }
      });
    }, []);

    const onChangeDateRangePicker = useCallback(
      (value: [Date | null, Date | null]) => {
        if (value[0] === null || value[1] === null) {
          return;
        }
        setValue([dayjs(value[0]), dayjs(value[1])]);
      },
      []
    );
    return (
      <div className={"invoiceStepper"}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="İlk adım" description="Ayı seçin">
            <DateRangePicker
              label={"Faturalarin tarihi secin"}
              value={[value[0].toDate(), value[1].toDate()]}
              onChange={onChangeDateRangePicker}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Son adim"
            description="Müşteri seçin ve fatura oluşturun"
          >
            {value[0] !== null &&
              value[1] !== null &&
              customers.length > 0 &&
              products.length > 0 && (
                <CustomerInvoice
                  startDate={value[0]}
                  endDate={value[1]}
                  customers={customers}
                  products={products}
                />
              )}
          </Stepper.Step>
          <Stepper.Completed>Faturalar yazildi</Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Geri
          </Button>
          <Button color={"green"} onClick={nextStep}>
            Soranki adim
          </Button>
        </Group>
      </div>
    );
  }
);
