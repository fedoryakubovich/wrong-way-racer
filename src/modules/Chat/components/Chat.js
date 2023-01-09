import React from "react";
import MuiStack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomInput from "../../../components/CustomInput";
import { SOCKET_EVENTS } from "../../../utils";
import SendIcon from "../../../assets/icons/Send.svg";
import {
  StyledJoinedMessage,
  StyledMessage,
  StyledChatBody,
  StyledChatBodyBorder,
  StyledSendButton,
} from "./styled";

const ChatContainer = ({ messages, endChatRef }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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

            return <StyledMessage key={id}>{data}</StyledMessage>;
          })}
          <section ref={endChatRef} />
        </StyledChatBody>
      </StyledChatBodyBorder>

      <MuiStack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="12px"
        sx={{
          [theme.breakpoints.down("md")]: {
            marginTop: "14px",
          },
        }}
      >
        <CustomInput placeholder="..." />

        <StyledSendButton variant="contained">
          {matches ? <span>Send</span> : <img src={SendIcon} alt="send icon" />}
        </StyledSendButton>
      </MuiStack>
    </MuiStack>
  );
};

export default ChatContainer;
