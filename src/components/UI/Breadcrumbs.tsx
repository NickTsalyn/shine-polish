import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

interface RoomNameProps {
  roomName: string;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BasicBreadcrumbs: React.FC<RoomNameProps> = ({ roomName }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        className="mb-3 md:mb-[18px] lg:mb-7"
      >
        <Link className="body text-text" color="inherit" href="/">
          Home
        </Link>
        <Link
          className="body text-text"
          color="inherit"
          href="/cleaning-services"
        >
          Cleaning Services
        </Link>
        <Typography className="body text-main">{roomName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
