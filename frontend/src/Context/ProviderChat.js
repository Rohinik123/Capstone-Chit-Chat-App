import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ProviderChat = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, SetUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    SetUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        SetUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ProviderChat;
