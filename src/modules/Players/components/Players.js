import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import SettingsIcon from "../../../assets/icons/Settings.svg";
import {
  StyledSettingsButton,
  StyledSettingsButtonWrapper,
  StyledListItemButton,
  StyledPlayersWrapper,
} from "./styled";
import ThreeDotsButton from "./ThreeDotsButton";

const Players = ({ players, handleClickOpen }) => {
  return (
    <StyledPlayersWrapper>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        sx={{
          px: 2,
          py: 0.5,
          height: 29,
          background:
            "radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(34, 21, 49, 0.5) 0%, rgba(22, 22, 48, 0.5) 71.87%), rgba(19, 20, 68, 0.5)",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Players
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            lineHeight: 18,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {players.length}/{players.length}
        </Typography>
      </Stack>

      <StyledSettingsButtonWrapper>
        <StyledSettingsButton variant="contained" onClick={handleClickOpen}>
          <img src={SettingsIcon} alt="settings icon" />
          Settings
        </StyledSettingsButton>
      </StyledSettingsButtonWrapper>

      <List sx={{ maxHeight: 210, overflowY: "scroll" }}>
        {players.map((player) => {
          return (
            <StyledListItemButton sx={{ py: 0.5 }} key={JSON.stringify(player)}>
              <ListItemAvatar sx={{ minWidth: 24 }}>
                <Avatar
                  alt={player.name}
                  src={player.avatar}
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={player.name}
                primaryTypographyProps={{
                  fontSize: 14,
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
                sx={{ color: "#ffffff", mx: 1 }}
              />

              <ThreeDotsButton />
            </StyledListItemButton>
          );
        })}
      </List>
    </StyledPlayersWrapper>
  );
};

export default Players;
