import React, { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { StyledPopover, StyledMenuDivider } from "./styled";

const ThreeDotsButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        color="primary"
        component="label"
        aria-describedby={id}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          width: 24,
          height: 24,
        }}
        onClick={handleClick}
      >
        <MoreHorizIcon sx={{ width: 16 }} />
      </IconButton>

      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <List>
          <ListItemButton>
            <ListItemText
              primary={"Kick"}
              primaryTypographyProps={{
                fontSize: 16,
                lineHeight: "21px",
                fontWeight: 700,
              }}
              sx={{ color: "#fffefe" }}
            />
          </ListItemButton>

          <StyledMenuDivider component={"section"} />

          <ListItemButton>
            <ListItemText
              primary={"Report"}
              primaryTypographyProps={{
                fontSize: 16,
                lineHeight: "21px",
                fontWeight: 700,
              }}
              sx={{ color: "#fffefe" }}
            />
          </ListItemButton>

          <StyledMenuDivider component={"section"} />

          <ListItemButton>
            <ListItemText
              primary={"Mute"}
              primaryTypographyProps={{
                fontSize: 16,
                lineHeight: "21px",
                fontWeight: 700,
              }}
              sx={{ color: "#fffefe" }}
            />
          </ListItemButton>
        </List>
      </StyledPopover>
    </>
  );
};

export default ThreeDotsButton;
