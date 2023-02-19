import { useCallback, useMemo, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createInvoice } from "../graphql/mutations";
import { CreateInvoiceInput, Invoice } from "../API";
import { GraphQLRequestHook } from "./types";

export function useCreateInvoice(
  createInvoiceInput: CreateInvoiceInput
): GraphQLRequestHook<Invoice> {
  const [result, setResult] = useState<Invoice>();
  const createInvoiceCallback = useCallback(() => {
    (
      API.graphql(
        graphqlOperation(createInvoice, { input: createInvoiceInput })
      ) as Promise<{ data: Invoice }>
    ).then((value) => {
      if (value.data) {
        setResult(value.data);
      }
    });
  }, [createInvoiceInput]);

  return useMemo(() => {
    return {
      execute: createInvoiceCallback,
    };
  }, [createInvoiceCallback]);
}
