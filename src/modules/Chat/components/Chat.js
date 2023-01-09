import React from "react";
import MuiStack from "@mui/material/Stack";
import CustomInput from "../../../components/CustomInput";

import { SOCKET_EVENTS } from "../../../utils";
import {
  StyledJoinedMessage,
  StyledMessage,
  StyledChatBody,
  StyledChatBodyBorder,
  StyledSendButton,
} from "./styled";

const ChatContainer = ({ messages, endChatRef }) => {
  return (
    <MuiStack
      direction={"column"}
      justifyContent="space-between"
      sx={{ height: "100%" }}
    >
      <StyledChatBodyBorder>
        <StyledChatBody>
          {messages.map(({ type, data, id }) => {
            if (type === SOCKET_EVENTS.newChatJoin) {
              return (
                <StyledJoinedMessage key={id}>
                  {data.name} Joined The Game
                </StyledJoinedMessage>
              );
            }

            return <StyledMessage>{data}</StyledMessage>;
          })}
          <section ref={endChatRef} />
        </StyledChatBody>
      </StyledChatBodyBorder>

      <MuiStack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="12px"
      >
        <CustomInput placeholder="..." />

        <StyledSendButton variant="contained">Send</StyledSendButton>
      </MuiStack>
    </MuiStack>
  );
};

export default ChatContainer;
