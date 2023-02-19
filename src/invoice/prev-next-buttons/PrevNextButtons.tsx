import React, { memo } from "react";
import { Button } from "@mantine/core";

interface PrevNextButtonsProps {
  currentCustomerIndex: number;
  onChangeCurrentCustomerIndex: (index: number) => void;
  customerCount: number;
}

export const PrevNextButtons = memo(function PrevNextButtons(
  props: PrevNextButtonsProps
): React.ReactElement {
  const { currentCustomerIndex, onChangeCurrentCustomerIndex, customerCount } =
    props;
  return (
    <div className={"customerNavigationButtons"}>
      {currentCustomerIndex > 0 && (
        <Button
          onClick={() => onChangeCurrentCustomerIndex(currentCustomerIndex - 1)}
        >
          Önceki müşteri
        </Button>
      )}
      {currentCustomerIndex < customerCount - 1 && (
        <Button
          onClick={() => onChangeCurrentCustomerIndex(currentCustomerIndex + 1)}
        >
          Sonraki müşteri
        </Button>
      )}
    </div>
  );
});
