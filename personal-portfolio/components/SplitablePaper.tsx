import { PropsOf } from "@emotion/react";
import { Box, Paper, Stack, StackProps } from "@mui/material";
import { motion, Variant, Variants } from "framer-motion";
import React, { FC } from "react";

type Props = StackProps &
  PropsOf<typeof motion.div> & {
    children?: JSX.Element | JSX.Element[];
    elevation?: number;
    borderRadius?: number;
    paperCorners?: any;
    splitDirection?: "horizontal" | "vertical";
    spacing?: number;
    initial?: "joined" | "split";
    animate?: "joined" | "split";
  };

const SplitablePaper: FC<Props> = (props) => {
  const {
    children,
    elevation = 1,
    borderRadius = 2,
    paperCorners,
    splitDirection = "vertical",
    spacing = 2,
    initial = "joined",
    animate,
    ref,
    ...stackProps
  } = props;

  const variants: Variants = {
    joined: {
      gap: "0rem",
      transition: { type: "tween" },
    },
    split: {
      gap: `${spacing / 2}rem`,
      transition: {
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  return (
    <Stack
      component={motion.div}
      direction={splitDirection === "vertical" ? "row" : "column"}
      variants={variants}
      initial={initial}
      animate={animate}
      {...stackProps}
    >
      {React.Children.map(children, (child, index) => {
        const isFirstChild = Array.isArray(children) && index === 0;
        const isLastChild =
          Array.isArray(children) && index === children.length - 1;

        const remBorderRadius = `${borderRadius / 4}rem`;

        const variantOverride: Variant = {};
        if (splitDirection === "vertical") {
          if (isFirstChild) {
            variantOverride.borderTopLeftRadius =
              paperCorners?.borderTopLeftRadius ?? remBorderRadius;
            variantOverride.borderBottomLeftRadius =
              paperCorners?.borderBottomLeftRadius ?? remBorderRadius;
          }
          if (isLastChild) {
            variantOverride.borderTopRightRadius =
              paperCorners?.borderTopRightRadius ?? remBorderRadius;
            variantOverride.borderBottomRightRadius =
              paperCorners?.borderBottomRightRadius ?? remBorderRadius;
          }
        } else {
          if (isFirstChild) {
            variantOverride.borderTopLeftRadius =
              paperCorners?.borderTopLeftRadius ?? remBorderRadius;
            variantOverride.borderTopRightRadius =
              paperCorners?.borderTopRightRadius ?? remBorderRadius;
          }
          if (isLastChild) {
            variantOverride.borderBottomLeftRadius =
              paperCorners?.borderBottomLeftRadius ?? remBorderRadius;
            variantOverride.borderBottomRightRadius =
              paperCorners?.borderBottomRightRadius ?? remBorderRadius;
          }
        }

        const joinedPaperVariant: Variant = {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          ...variantOverride,
          transition: { type: "tween" },
        };

        const splitPaperVariant: Variant = {
          borderTopLeftRadius: remBorderRadius,
          borderTopRightRadius: remBorderRadius,
          borderBottomLeftRadius: remBorderRadius,
          borderBottomRightRadius: remBorderRadius,
          ...variantOverride,
          transition: { type: "spring", bounce: 0.6 },
        };

        switch (child?.type.name) {
          case Paper.name:
            const paperVariants: Variants = {
              joined: joinedPaperVariant,
              split: splitPaperVariant,
            };

            const { children: childChildren, ...otherChildProps } = child.props;

            return (
              <Box
                component={motion.div}
                sx={{
                  position: "relative",
                  ...otherChildProps.sx,
                  overflow: "visible",
                }}
                variants={paperVariants}
                initial={initial}
                animate={animate}
              >
                <Paper
                  component={motion.div}
                  {...otherChildProps}
                  elevation={24}
                  sx={{
                    ...otherChildProps.sx,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                  }}
                  variants={paperVariants}
                  initial={initial}
                  animate={animate}
                />
                <Paper
                  component={motion.div}
                  {...otherChildProps}
                  elevation={0}
                  sx={{
                    ...otherChildProps.sx,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  variants={paperVariants}
                  initial={initial}
                  animate={animate}
                >
                  {childChildren}
                </Paper>
              </Box>
            );
          case SplitablePaper.name:
            return (
              <SplitablePaper
                elevation={elevation}
                paperCorners={
                  animate === "split" ? splitPaperVariant : joinedPaperVariant
                }
                initial={animate}
                animate={animate}
                {...child.props}
              />
            );
          default:
            console.log(child?.type.name);
        }
      })}
    </Stack>
  );
};
export default SplitablePaper;
