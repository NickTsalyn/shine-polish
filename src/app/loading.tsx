"use client";

import { Box, CircularProgress } from "@mui/material";

interface Props {
  height?: string;
}

export default function Loading({ height }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: height,
        alignItems: "center",
        color: "#006778",
      }}
    >
      <CircularProgress className="text-main" />
    </Box>
  );
}
