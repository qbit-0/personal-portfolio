import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { SampleContext } from "../../utility/context/SampleProvider";

type Props = {};

const SampleProfile: FC<Props> = ({}) => {
  const { userAccountId, getAccount, targetWidth } = useContext(SampleContext);

  const userAccount = useMemo(() => getAccount(userAccountId), [userAccountId]);

  return (
    <Box
      component="div"
      width="100%"
      height="100%"
      pt={targetWidth >= 1024 ? 0 : 8}
      pb={targetWidth >= 1024 ? 4 : 8}
      overflow="auto"
      flex={1}
    >
      <Box
        component="div"
        width="100%"
        height={256}
        sx={{
          backgroundImage: `url(${userAccount.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box component="div" position="relative" top={-50}>
        <Box component="div" overflow="clip">
          <Stack
            direction="row"
            spacing={1}
            alignItems="end"
            position="relative"
            left={16}
          >
            <Paper
              elevation={3}
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
              }}
            >
              <Avatar
                src={userAccount.avatar}
                sx={{ width: 100, height: 100 }}
              />
            </Paper>
            <Stack direction="row" spacing={1} height={50} alignItems="center">
              {userAccount.traits.map((trait, index) => (
                <Chip label={trait} key={index} />
              ))}
            </Stack>
          </Stack>
        </Box>
        <Box component="div" px={1}>
          <Typography variant="h3" fontWeight="bold">
            {userAccount.name}
          </Typography>
          <Typography color="red">@{userAccount.username}</Typography>
          {userAccount.body}
        </Box>
      </Box>
    </Box>
  );
};

export default SampleProfile;
