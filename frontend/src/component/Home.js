import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="#2B4865"
        color="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="3xl"
          fontFamily="'Varela Round', sans-serif;
          "
          fontWeight="extrabold"
          alignItems="center"
          justifyContent="center"
          marginLeft="185px"
        >
          JetSetSms-App
        </Text>
      </Box>
      <Box
        bg="#2B4865"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {" "}
              <Login />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Signup />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
