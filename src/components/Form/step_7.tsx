"use client";

import { Box } from "@mui/material";
import Link from "next/link";

const Step7 = () => {
  return (
    <div className="p-4 md:p-6 lg:p-9">
      
      <Box className=" flex justify-center items-center w-[208px] h-[40px]">
      <Link
        href="https://buy.stripe.com/test_3cs8AldjBeZj61G9AA"
        className="py-1.5 md:py-1 bg-accent text-white border border-solid border-accent rounded-xl w-full text-center "
      >
        BOOK NOW
      </Link>
      </Box>
    </div>
  );
};
export default Step7;
