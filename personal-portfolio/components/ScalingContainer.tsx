import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  targetWidth: number;
  children: React.ReactNode;
};

const ScalingContainer: FC<Props> = ({ targetWidth, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const parentElement = useMemo(
    () => contentRef.current?.parentElement,
    [contentRef.current]
  );

  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [resizeObserver, setResizeObserver] = useState<ResizeObserver | null>(
    null
  );

  useEffect(() => {
    setResizeObserver(
      new ResizeObserver((entries) => {
        if (entries.length > 0) {
          const entry = entries[0];
          setParentWidth(entry.contentRect.width);
          setParentHeight(entry.contentRect.height);
        }
      })
    );
  }, []);

  let scale = targetWidth > parentWidth ? parentWidth / targetWidth : 1;

  useEffect(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      if (parentElement) {
        resizeObserver.observe(parentElement);
      }
    }
  }, [resizeObserver, parentElement]);

  return (
    <Box
      ref={contentRef}
      component="div"
      position="relative"
      width={targetWidth}
      height={parentHeight / scale}
      flexShrink={0}
      sx={{ transform: `scale(${scale})` }}
    >
      {children}
    </Box>
  );
};

export default ScalingContainer;
