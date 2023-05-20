import React from "react";
import { ChatState } from "../../Context/ProviderChat";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      padding={3}
      background="black"
      width={{ base: "100%", md: "70%" }}
      borderRadius="lg"
      color="#ECF9FF"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
