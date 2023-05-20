import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      backgroundColor="#282A3A"
      _hover={{ background: "black", color: "white" }}
      width="100%"
      display="flex"
      alignItems="center"
      color="white"
      px="3"
      py="2"
      marginBottom="2"
      borderRadius="lg"
    >
      <Avatar
        marginRight="2"
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : {user.email}</b>
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
