import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ProviderChat";
import MyChats from "../Pages/miscelleneous/MyChat";
import SideDraw from "../Pages/miscelleneous/SideDraw";
import ChatBox from "../Pages/miscelleneous/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDraw />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
