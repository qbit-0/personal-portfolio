import { Chip, Popover, Typography } from "@mui/material";
import React, { FC, useRef, useState } from "react";

type Props = { label: string; text?: string };

const PopoverChip: FC<Props> = ({ label, text }) => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);

  const handlePopoverOpen = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Chip
        label={label}
        ref={anchorEl}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      {text && (
        <Popover
          open={open}
          sx={{ pointerEvents: "none" }}
          anchorEl={anchorEl.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
        >
          <Typography sx={{ p: 1 }}>{text}</Typography>
        </Popover>
      )}
    </>
  );
};

export default PopoverChip;
