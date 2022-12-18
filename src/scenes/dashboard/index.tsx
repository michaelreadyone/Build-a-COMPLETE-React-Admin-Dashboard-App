import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";

type Props = {};

function index({}: Props) {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
    </Box>
  );
}

export default index;
