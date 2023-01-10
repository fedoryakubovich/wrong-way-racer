import React from "react";

import { StyledMainLayout, StyledContent } from "./styled";

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <StyledContent>{children}</StyledContent>
    </StyledMainLayout>
  );
};

export default MainLayout;
