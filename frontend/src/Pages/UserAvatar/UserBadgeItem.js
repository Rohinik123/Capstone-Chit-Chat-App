import React from "react";
import { Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px="2"
      py="1"
      borderRadius="lg"
      margin="1"
      marginBottom="2"
      variant="solod"
      fontSize="12px"
      backgroundColor="black"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon paddingLeft="1" />
    </Box>
  );
};

export default UserBadgeItem;
