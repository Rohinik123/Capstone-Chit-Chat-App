import React from "react";
import {
  Button,
  Modal,
  IconButton,
  Image,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          color="white"
          bg="#2B4865"
          opacity="0.9"
        />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent height="400px" bg="#282A3A">
          <ModalHeader
            fontSize="28px"
            fontFamily="'Varela Round', sans-serif;
            "
            display="flex"
            justifyContent="center"
            color="white"
            opacity="0.8"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="50%"
              width="100%"
              boxSize="150px"
              objectFit="cover"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="'Varela Round', sans-serif;
              "
              color="white"
              opacity="0.4"
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
