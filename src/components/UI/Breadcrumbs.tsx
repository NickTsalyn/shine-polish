import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

interface RoomNameProps {
  pageHref?: string;
  pageName?: string;
  roomName: string;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const BasicBreadcrumbs: React.FC<RoomNameProps> = ({
  pageHref,
  pageName,
  roomName,
}) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        className="mb-3 md:mb-[18px] lg:mb-7"
      >
        <Link className="body text-text" color="inherit" href="/">
          Home
        </Link>
        {pageHref && (
          <Link
            className="body text-text"
            color="inherit"
            href={`/${pageHref}`}
          >
            {pageName}
          </Link>
        ) }
        <Typography className="body text-main">{roomName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
