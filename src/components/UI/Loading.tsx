"use client";

import { Box, CircularProgress } from "@mui/material";

interface Props {
  width: string;
}
export default function Loading({ width }: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: width, color: "#006778" }}>
      <CircularProgress />
    </Box>
  );
}
