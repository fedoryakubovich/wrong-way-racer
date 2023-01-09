import React, { useCallback, useEffect } from "react";

import { styled } from "@mui/material/styles";

const StyledMainLayout = styled("section")(() => ({
  background:
    "linear-gradient(234.36deg, rgba(12, 12, 76, 0.5) 2.69%, rgba(6, 6, 6, 0) 43.67%), radial-gradient(168.67% 168.67% at 48.89% 54.41%, rgba(78, 32, 130, 0.5) 0%, rgba(12, 12, 76, 0.5) 71.88%), #080817",
}));

const StyledContent = styled("section")(() => ({
  maxWidth: 1120,
  margin: "0 auto",
  paddingTop: 42,
  paddingLeft: 12,
  paddingRight: 12,
}));

const HORIZONTAL_PADDING = 16;
const MainLayout = ({ children, gameRef }) => {
  useEffect(() => {
    window.addEventListener("resize", handleChangeWindowSize);
  }, []);

  const handleChangeWindowSize = () => {
    console.log(gameRef.current.app.renderer.view);
    if (window.innerWidth - HORIZONTAL_PADDING * 2 < 1120) {
      const newGameWidth = window.innerWidth - HORIZONTAL_PADDING * 2;
      const newGameHeight = newGameWidth / 1.726;

      const currentGameWidth = gameRef.current.app.renderer.view.width;
      const currentGameHeight = gameRef.current.app.renderer.view.height;

      gameRef.current.app.renderer.view.style.width = newGameWidth + "px";
      gameRef.current.app.renderer.view.style.height = newGameHeight + "px";
      gameRef.current.app.renderer.view.width = newGameWidth * 2;
      gameRef.current.app.renderer.view.height = newGameHeight * 2;
      gameRef.current.app.renderer.resize(newGameWidth, newGameHeight);
    }
  };

  return (
    <StyledMainLayout>
      <StyledContent>{children}</StyledContent>
    </StyledMainLayout>
  );
};

export default MainLayout;
