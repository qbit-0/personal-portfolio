import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { SampleContext } from "../../utility/context/SampleProvider";

type Props = { accountId: number };

const SampleProfile: FC<Props> = ({ accountId }) => {
  const { getAccount } = useContext(SampleContext);

  const account = useMemo(() => getAccount(accountId), [accountId]);

  return (
    <>
      <Box
        component="div"
        width="100%"
        height={256}
        sx={{ backgroundImage: `url(${account.banner})` }}
      />
      <Box component="div" position="relative" top={-50}>
        <Stack
          direction="row"
          spacing={2}
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
            <Avatar src={account.avatar} sx={{ width: 100, height: 100 }} />
          </Paper>
          <Stack direction="row" spacing={1} height={50} alignItems="center">
            {account.traits.map((trait, index) => (
              <Chip label={trait} key={index} />
            ))}
          </Stack>
        </Stack>
        <Box component="div" px={1}>
          <Typography fontSize={40} fontWeight="bold">
            {account.name}
          </Typography>
          <Typography fontSize={12}>@{account.username}</Typography>
          {account.body}
        </Box>
      </Box>
    </>
  );
};

export default SampleProfile;
