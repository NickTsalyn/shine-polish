"use client";
    
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center",  color: "#006778" }}>
      <CircularProgress className="text-main"/>
    </Box>
  );
}
