import React, { memo } from "react";
import { Button, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import "./HomePage.css";

export const HomePage = memo(function HomePage(): React.ReactElement {
  const navigate = useNavigate();
  return (
    <Center style={{ height: 600 }}>
      <div className={"wrapper"}>
        Hoş geldiniz
        <Button
          onClick={() => {
            navigate("../invoice/create");
          }}
        >
          Fatura basla
        </Button>
      </div>
    </Center>
  );
});
